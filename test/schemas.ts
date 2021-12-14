/* globals describe:false,it:false */
const { INFURA_API_KEY } = process.env;
if (!INFURA_API_KEY) {
  throw new Error("Need to set INFURA_API_KEY");
}
import assert from 'assert';
import Web3 from 'web3';
import { schemas } from '../src/index';
const ZeroClientProvider = require("web3-provider-engine/zero.js");

const engine = ZeroClientProvider({
  getAccounts: () => { },
  rpcUrl: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
});
const web3 = new Web3(engine);

schemas.main.map((schema) => {
  describe(schema.name, () => {
    it("should have a unique name", () => {
      const matching = schemas.main.filter((s) => s.name === schema.name);
      assert.equal(
        matching.length,
        1,
        "Schema name " + schema.name + " is not unique"
      );
    });

    const transfer = schema.events.transfer[0];
    if (transfer) {

      const transferContract = new web3.eth
        .Contract([transfer], transfer.target)
      it("should have some transfer events", async () => {
        // console.log(transferContract);
        const fromBlock = schema.deploymentBlock;
        const toBlock = fromBlock + 10000;
        const events = await transferContract.getPastEvents(transfer.name, { fromBlock, toBlock });
        console.log(
          events.length +
          " transfer events for schema " +
          schema.name +
          " in first 10000 blocks"
        );
        assert.equal(
          events.length > 0,
          true,
          "No transfer events found in first 10000 blocks"
        );

      }).timeout(5000);
    }
  });
});
