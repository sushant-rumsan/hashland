import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Project
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const projectAbi = [
  {
    type: 'function',
    inputs: [{ name: 'entity', internalType: 'address', type: 'address' }],
    name: 'addApprovedEntity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'plotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OwnershipRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'plotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'newPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: 'username', internalType: 'string', type: 'string' }],
    name: 'registerLandOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plotId', internalType: 'uint256', type: 'uint256' },
      { name: 'location', internalType: 'string', type: 'string' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerPlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'entity', internalType: 'address', type: 'address' }],
    name: 'removeApprovedEntity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plotId', internalType: 'uint256', type: 'uint256' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
      { name: 'newPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'approvedEntities',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ownerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getLandOwner',
    outputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'plotId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPlot',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'government',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'landOwners',
    outputs: [
      { name: 'username', internalType: 'string', type: 'string' },
      { name: 'walletAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'plots',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'location', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useReadProject = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"approvedEntities"`
 */
export const useReadProjectApprovedEntities =
  /*#__PURE__*/ createUseReadContract({
    abi: projectAbi,
    functionName: 'approvedEntities',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"getLandOwner"`
 */
export const useReadProjectGetLandOwner = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'getLandOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"getPlot"`
 */
export const useReadProjectGetPlot = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'getPlot',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"government"`
 */
export const useReadProjectGovernment = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'government',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"landOwners"`
 */
export const useReadProjectLandOwners = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'landOwners',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"plots"`
 */
export const useReadProjectPlots = /*#__PURE__*/ createUseReadContract({
  abi: projectAbi,
  functionName: 'plots',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useWriteProject = /*#__PURE__*/ createUseWriteContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const useWriteProjectAddApprovedEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"registerLandOwner"`
 */
export const useWriteProjectRegisterLandOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'registerLandOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"registerPlot"`
 */
export const useWriteProjectRegisterPlot = /*#__PURE__*/ createUseWriteContract(
  { abi: projectAbi, functionName: 'registerPlot' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"removeApprovedEntity"`
 */
export const useWriteProjectRemoveApprovedEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'removeApprovedEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteProjectTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__
 */
export const useSimulateProject = /*#__PURE__*/ createUseSimulateContract({
  abi: projectAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"addApprovedEntity"`
 */
export const useSimulateProjectAddApprovedEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'addApprovedEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"registerLandOwner"`
 */
export const useSimulateProjectRegisterLandOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'registerLandOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"registerPlot"`
 */
export const useSimulateProjectRegisterPlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'registerPlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"removeApprovedEntity"`
 */
export const useSimulateProjectRemoveApprovedEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'removeApprovedEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateProjectTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectAbi}__
 */
export const useWatchProjectEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: projectAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectAbi}__ and `eventName` set to `"OwnershipRegistered"`
 */
export const useWatchProjectOwnershipRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectAbi,
    eventName: 'OwnershipRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchProjectOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectAbi,
    eventName: 'OwnershipTransferred',
  })
