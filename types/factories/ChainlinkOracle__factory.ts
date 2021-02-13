/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ChainlinkOracle } from "../ChainlinkOracle";

export class ChainlinkOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ChainlinkOracle> {
    return super.deploy(overrides || {}) as Promise<ChainlinkOracle>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkOracle {
    return super.attach(address) as ChainlinkOracle;
  }
  connect(signer: Signer): ChainlinkOracle__factory {
    return super.connect(signer) as ChainlinkOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkOracle {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "multiply",
        type: "address",
      },
      {
        internalType: "address",
        name: "divide",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "multiply",
        type: "address",
      },
      {
        internalType: "address",
        name: "divide",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "getDataParameter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610581806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063c699c4d614610067578063d0720d631461014c578063d568866c14610194578063d6d7d52514610204578063eeb8a8d314610204578063fdc28b081461028f575b600080fd5b6100d76004803603602081101561007d57600080fd5b81019060208101813564010000000081111561009857600080fd5b8201836020820111156100aa57600080fd5b803590602001918460018302840111640100000000831117156100cc57600080fd5b5090925090506102c5565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101115781810151838201526020016100f9565b50505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101826004803603606081101561016257600080fd5b506001600160a01b038135811691602081013590911690604001356102e7565b60408051918252519081900360200190f35b6100d7600480360360208110156101aa57600080fd5b8101906020810181356401000000008111156101c557600080fd5b8201836020820111156101d757600080fd5b803590602001918460018302840111640100000000831117156101f957600080fd5b509092509050610430565b6102746004803603602081101561021a57600080fd5b81019060208101813564010000000081111561023557600080fd5b82018360208201111561024757600080fd5b8035906020019184600183028401116401000000008311171561026957600080fd5b509092509050610455565b60408051921515835260208301919091528051918290030190f35b6100d7600480360360608110156102a557600080fd5b506001600160a01b038135811691602081013590911690604001356104a5565b6040805180820190915260048152634c494e4b60e01b60208201525b92915050565b6000670de0b6b3a76400006001600160a01b0385161561037f576000856001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561033c57600080fd5b505afa158015610350573d6000803e3d6000fd5b505050506040513d60a081101561036657600080fd5b5060200151905061037782826104df565b915050610394565b61039181670de0b6b3a76400006104df565b90505b6001600160a01b0384161561041d576000846001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156103de57600080fd5b505afa1580156103f2573d6000803e3d6000fd5b505050506040513d60a081101561040857600080fd5b5060200151905080828161041857fe5b049150505b82818161042657fe5b0495945050505050565b5050604080518082019091526009815268436861696e6c696e6b60b81b602082015290565b60008060008060008686606081101561046d57600080fd5b506001600160a01b03813581169450602082013516925060400135905060016104978484846102e7565b945094505050509250929050565b604080516001600160a01b039485166020820152929093168284015260608083019190915282518083039091018152608090910190915290565b60008115806104fa575050808202828282816104f757fe5b04145b6102e1576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fdfea2646970667358221220216775f25c4b5e74ce62f0c8a181de83eb87f6ec42ccf9251a5df9e940b7ada864736f6c634300060c0033";
