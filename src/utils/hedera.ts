import { contract } from '@/constants/contract';
import { Client, AccountId, PrivateKey, ContractExecuteTransaction, ContractCallQuery } from '@hashgraph/sdk';

const client = Client.forTestnet();
client.setOperator(
  AccountId.fromString(process.env.HEDERA_ACCOUNT_ID as string),
  PrivateKey.fromStringED25519(process.env.HEDERA_PRIVATE_KEY as string)
);

export const executeContract = async (functionName: string, params: any) => {
  try {
    const contractExecuteTx = new ContractExecuteTransaction()
      .setContractId(contract)
      .setGas(100000)
      .setFunction(functionName, params);

    const txResponse = await contractExecuteTx.execute(client);
    const receipt = await txResponse.getReceipt(client);
    return receipt;
  } catch (error) {
    console.error('Error executing contract:', error);
    throw error;
  }
};

export const callContract = async (functionName: string, params: any) => {
  try {
    const contractCallTx = new ContractCallQuery()
      .setContractId(contract)
      .setFunction(functionName, params);

    const result = await contractCallTx.execute(client);
    return result.getString(); // assuming the result is a string
  } catch (error) {
    console.error('Error calling contract:', error);
    throw error;
  }
};
