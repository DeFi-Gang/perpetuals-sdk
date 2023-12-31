import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace PairInfos {
    type PairParamsStruct = {
        onePercentDepthAbove: PromiseOrValue<BigNumberish>;
        onePercentDepthBelow: PromiseOrValue<BigNumberish>;
        rolloverFeePerBlockP: PromiseOrValue<BigNumberish>;
        fundingFeePerBlockP: PromiseOrValue<BigNumberish>;
    };
    type PairParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        onePercentDepthAbove: BigNumber;
        onePercentDepthBelow: BigNumber;
        rolloverFeePerBlockP: BigNumber;
        fundingFeePerBlockP: BigNumber;
    };
    type PairRolloverFeesStruct = {
        accPerCollateral: PromiseOrValue<BigNumberish>;
        lastUpdateBlock: PromiseOrValue<BigNumberish>;
    };
    type PairRolloverFeesStructOutput = [BigNumber, BigNumber] & {
        accPerCollateral: BigNumber;
        lastUpdateBlock: BigNumber;
    };
    type PairFundingFeesStruct = {
        accPerOiLong: PromiseOrValue<BigNumberish>;
        accPerOiShort: PromiseOrValue<BigNumberish>;
        lastUpdateBlock: PromiseOrValue<BigNumberish>;
    };
    type PairFundingFeesStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        accPerOiLong: BigNumber;
        accPerOiShort: BigNumber;
        lastUpdateBlock: BigNumber;
    };
}
export interface PairInfosInterface extends utils.Interface {
    functions: {
        "getAccFundingFeesLong(uint256)": FunctionFragment;
        "getAccFundingFeesShort(uint256)": FunctionFragment;
        "getAccFundingFeesUpdateBlock(uint256)": FunctionFragment;
        "getAccRolloverFees(uint256)": FunctionFragment;
        "getAccRolloverFeesUpdateBlock(uint256)": FunctionFragment;
        "getFundingFeePerBlockP(uint256)": FunctionFragment;
        "getOnePercentDepthAbove(uint256)": FunctionFragment;
        "getOnePercentDepthBelow(uint256)": FunctionFragment;
        "getPairInfos(uint256[])": FunctionFragment;
        "getPendingAccFundingFees(uint256)": FunctionFragment;
        "getPendingAccRolloverFees(uint256)": FunctionFragment;
        "getRolloverFeePerBlockP(uint256)": FunctionFragment;
        "getTradeFundingFee(address,uint256,uint256,bool,uint256,uint256)": FunctionFragment;
        "getTradeFundingFeePure(int256,int256,uint256,uint256)": FunctionFragment;
        "getTradeInitialAccFundingFeesPerOi(address,uint256,uint256)": FunctionFragment;
        "getTradeInitialAccRolloverFeesPerCollateral(address,uint256,uint256)": FunctionFragment;
        "getTradeLiquidationPrice(address,uint256,uint256,uint256,bool,uint256,uint256)": FunctionFragment;
        "getTradeLiquidationPricePure(uint256,bool,uint256,uint256,uint256,int256)": FunctionFragment;
        "getTradeOpenedAfterUpdate(address,uint256,uint256)": FunctionFragment;
        "getTradePriceImpact(uint256,uint256,bool,uint256)": FunctionFragment;
        "getTradePriceImpactPure(uint256,bool,uint256,uint256,uint256)": FunctionFragment;
        "getTradeRolloverFee(address,uint256,uint256,uint256)": FunctionFragment;
        "getTradeRolloverFeePure(uint256,uint256,uint256)": FunctionFragment;
        "getTradeValue(address,uint256,uint256,bool,uint256,uint256,int256,uint256)": FunctionFragment;
        "getTradeValuePure(uint256,int256,uint256,int256,uint256)": FunctionFragment;
        "initialize(address,address,uint256)": FunctionFragment;
        "manager()": FunctionFragment;
        "maxNegativePnlOnOpenP()": FunctionFragment;
        "pairFundingFees(uint256)": FunctionFragment;
        "pairParams(uint256)": FunctionFragment;
        "pairRolloverFees(uint256)": FunctionFragment;
        "setFundingFeePerBlockP(uint256,uint256)": FunctionFragment;
        "setFundingFeePerBlockPArray(uint256[],uint256[])": FunctionFragment;
        "setManager(address)": FunctionFragment;
        "setMaxNegativePnlOnOpenP(uint256)": FunctionFragment;
        "setOnePercentDepth(uint256,uint256,uint256)": FunctionFragment;
        "setOnePercentDepthArray(uint256[],uint256[],uint256[])": FunctionFragment;
        "setPairParams(uint256,(uint256,uint256,uint256,uint256))": FunctionFragment;
        "setPairParamsArray(uint256[],(uint256,uint256,uint256,uint256)[])": FunctionFragment;
        "setRolloverFeePerBlockP(uint256,uint256)": FunctionFragment;
        "setRolloverFeePerBlockPArray(uint256[],uint256[])": FunctionFragment;
        "storageT()": FunctionFragment;
        "storeTradeInitialAccFees(address,uint256,uint256,bool)": FunctionFragment;
        "tradeInitialAccFees(address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAccFundingFeesLong" | "getAccFundingFeesShort" | "getAccFundingFeesUpdateBlock" | "getAccRolloverFees" | "getAccRolloverFeesUpdateBlock" | "getFundingFeePerBlockP" | "getOnePercentDepthAbove" | "getOnePercentDepthBelow" | "getPairInfos" | "getPendingAccFundingFees" | "getPendingAccRolloverFees" | "getRolloverFeePerBlockP" | "getTradeFundingFee" | "getTradeFundingFeePure" | "getTradeInitialAccFundingFeesPerOi" | "getTradeInitialAccRolloverFeesPerCollateral" | "getTradeLiquidationPrice" | "getTradeLiquidationPricePure" | "getTradeOpenedAfterUpdate" | "getTradePriceImpact" | "getTradePriceImpactPure" | "getTradeRolloverFee" | "getTradeRolloverFeePure" | "getTradeValue" | "getTradeValuePure" | "initialize" | "manager" | "maxNegativePnlOnOpenP" | "pairFundingFees" | "pairParams" | "pairRolloverFees" | "setFundingFeePerBlockP" | "setFundingFeePerBlockPArray" | "setManager" | "setMaxNegativePnlOnOpenP" | "setOnePercentDepth" | "setOnePercentDepthArray" | "setPairParams" | "setPairParamsArray" | "setRolloverFeePerBlockP" | "setRolloverFeePerBlockPArray" | "storageT" | "storeTradeInitialAccFees" | "tradeInitialAccFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAccFundingFeesLong", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAccFundingFeesShort", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAccFundingFeesUpdateBlock", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAccRolloverFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getAccRolloverFeesUpdateBlock", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFundingFeePerBlockP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOnePercentDepthAbove", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOnePercentDepthBelow", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPairInfos", values: [PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getPendingAccFundingFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPendingAccRolloverFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRolloverFeePerBlockP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTradeFundingFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeFundingFeePure", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeInitialAccFundingFeesPerOi", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeInitialAccRolloverFeesPerCollateral", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeLiquidationPrice", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeLiquidationPricePure", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeOpenedAfterUpdate", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradePriceImpact", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradePriceImpactPure", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeRolloverFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeRolloverFeePure", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeValue", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeValuePure", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxNegativePnlOnOpenP", values?: undefined): string;
    encodeFunctionData(functionFragment: "pairFundingFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairParams", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pairRolloverFees", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFundingFeePerBlockP", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setFundingFeePerBlockPArray", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "setManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setMaxNegativePnlOnOpenP", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setOnePercentDepth", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setOnePercentDepthArray", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setPairParams", values: [PromiseOrValue<BigNumberish>, PairInfos.PairParamsStruct]): string;
    encodeFunctionData(functionFragment: "setPairParamsArray", values: [PromiseOrValue<BigNumberish>[], PairInfos.PairParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "setRolloverFeePerBlockP", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setRolloverFeePerBlockPArray", values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "storageT", values?: undefined): string;
    encodeFunctionData(functionFragment: "storeTradeInitialAccFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "tradeInitialAccFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getAccFundingFeesLong", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccFundingFeesShort", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccFundingFeesUpdateBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccRolloverFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccRolloverFeesUpdateBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingFeePerBlockP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOnePercentDepthAbove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOnePercentDepthBelow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPairInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingAccFundingFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPendingAccRolloverFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRolloverFeePerBlockP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeFundingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeFundingFeePure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeInitialAccFundingFeesPerOi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeInitialAccRolloverFeesPerCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLiquidationPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLiquidationPricePure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeOpenedAfterUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradePriceImpact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradePriceImpactPure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeRolloverFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeRolloverFeePure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeValuePure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxNegativePnlOnOpenP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFundingFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairRolloverFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFundingFeePerBlockP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFundingFeePerBlockPArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxNegativePnlOnOpenP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOnePercentDepth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOnePercentDepthArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPairParamsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRolloverFeePerBlockP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRolloverFeePerBlockPArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storageT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeTradeInitialAccFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradeInitialAccFees", data: BytesLike): Result;
    events: {
        "AccFundingFeesStored(uint256,int256,int256)": EventFragment;
        "AccRolloverFeesStored(uint256,uint256)": EventFragment;
        "FeesCharged(uint256,bool,uint256,uint256,int256,uint256,int256)": EventFragment;
        "FundingFeePerBlockPUpdated(uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "ManagerUpdated(address)": EventFragment;
        "MaxNegativePnlOnOpenPUpdated(uint256)": EventFragment;
        "OnePercentDepthUpdated(uint256,uint256,uint256)": EventFragment;
        "PairParamsUpdated(uint256,tuple)": EventFragment;
        "RolloverFeePerBlockPUpdated(uint256,uint256)": EventFragment;
        "TradeInitialAccFeesStored(address,uint256,uint256,uint256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccFundingFeesStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccRolloverFeesStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeesCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundingFeePerBlockPUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ManagerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxNegativePnlOnOpenPUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OnePercentDepthUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PairParamsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RolloverFeePerBlockPUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradeInitialAccFeesStored"): EventFragment;
}
export interface AccFundingFeesStoredEventObject {
    pairIndex: BigNumber;
    valueLong: BigNumber;
    valueShort: BigNumber;
}
export type AccFundingFeesStoredEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], AccFundingFeesStoredEventObject>;
export type AccFundingFeesStoredEventFilter = TypedEventFilter<AccFundingFeesStoredEvent>;
export interface AccRolloverFeesStoredEventObject {
    pairIndex: BigNumber;
    value: BigNumber;
}
export type AccRolloverFeesStoredEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AccRolloverFeesStoredEventObject>;
export type AccRolloverFeesStoredEventFilter = TypedEventFilter<AccRolloverFeesStoredEvent>;
export interface FeesChargedEventObject {
    pairIndex: BigNumber;
    long: boolean;
    collateral: BigNumber;
    leverage: BigNumber;
    percentProfit: BigNumber;
    rolloverFees: BigNumber;
    fundingFees: BigNumber;
}
export type FeesChargedEvent = TypedEvent<[
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], FeesChargedEventObject>;
export type FeesChargedEventFilter = TypedEventFilter<FeesChargedEvent>;
export interface FundingFeePerBlockPUpdatedEventObject {
    pairIndex: BigNumber;
    value: BigNumber;
}
export type FundingFeePerBlockPUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], FundingFeePerBlockPUpdatedEventObject>;
export type FundingFeePerBlockPUpdatedEventFilter = TypedEventFilter<FundingFeePerBlockPUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface ManagerUpdatedEventObject {
    value: string;
}
export type ManagerUpdatedEvent = TypedEvent<[
    string
], ManagerUpdatedEventObject>;
export type ManagerUpdatedEventFilter = TypedEventFilter<ManagerUpdatedEvent>;
export interface MaxNegativePnlOnOpenPUpdatedEventObject {
    value: BigNumber;
}
export type MaxNegativePnlOnOpenPUpdatedEvent = TypedEvent<[
    BigNumber
], MaxNegativePnlOnOpenPUpdatedEventObject>;
export type MaxNegativePnlOnOpenPUpdatedEventFilter = TypedEventFilter<MaxNegativePnlOnOpenPUpdatedEvent>;
export interface OnePercentDepthUpdatedEventObject {
    pairIndex: BigNumber;
    valueAbove: BigNumber;
    valueBelow: BigNumber;
}
export type OnePercentDepthUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], OnePercentDepthUpdatedEventObject>;
export type OnePercentDepthUpdatedEventFilter = TypedEventFilter<OnePercentDepthUpdatedEvent>;
export interface PairParamsUpdatedEventObject {
    pairIndex: BigNumber;
    value: PairInfos.PairParamsStructOutput;
}
export type PairParamsUpdatedEvent = TypedEvent<[
    BigNumber,
    PairInfos.PairParamsStructOutput
], PairParamsUpdatedEventObject>;
export type PairParamsUpdatedEventFilter = TypedEventFilter<PairParamsUpdatedEvent>;
export interface RolloverFeePerBlockPUpdatedEventObject {
    pairIndex: BigNumber;
    value: BigNumber;
}
export type RolloverFeePerBlockPUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], RolloverFeePerBlockPUpdatedEventObject>;
export type RolloverFeePerBlockPUpdatedEventFilter = TypedEventFilter<RolloverFeePerBlockPUpdatedEvent>;
export interface TradeInitialAccFeesStoredEventObject {
    trader: string;
    pairIndex: BigNumber;
    index: BigNumber;
    rollover: BigNumber;
    funding: BigNumber;
}
export type TradeInitialAccFeesStoredEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], TradeInitialAccFeesStoredEventObject>;
export type TradeInitialAccFeesStoredEventFilter = TypedEventFilter<TradeInitialAccFeesStoredEvent>;
export interface PairInfos extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PairInfosInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getAccFundingFeesLong(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccFundingFeesShort(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccFundingFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccRolloverFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getOnePercentDepthAbove(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getOnePercentDepthBelow(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPairInfos(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            PairInfos.PairParamsStructOutput[],
            PairInfos.PairRolloverFeesStructOutput[],
            PairInfos.PairFundingFeesStructOutput[]
        ]>;
        getPendingAccFundingFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            valueLong: BigNumber;
            valueShort: BigNumber;
        }>;
        getPendingAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeFundingFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeFundingFeePure(accFundingFeesPerOi: PromiseOrValue<BigNumberish>, endAccFundingFeesPerOi: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeInitialAccFundingFeesPerOi(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeInitialAccRolloverFeesPerCollateral(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeLiquidationPrice(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeLiquidationPricePure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeOpenedAfterUpdate(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        getTradePriceImpact(openPrice: PromiseOrValue<BigNumberish>, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, tradeOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            priceImpactP: BigNumber;
            priceAfterImpact: BigNumber;
        }>;
        getTradePriceImpactPure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, startOpenInterest: PromiseOrValue<BigNumberish>, tradeOpenInterest: PromiseOrValue<BigNumberish>, onePercentDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            priceImpactP: BigNumber;
            priceAfterImpact: BigNumber;
        }>;
        getTradeRolloverFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeRolloverFeePure(accRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, endAccRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTradeValue(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getTradeValuePure(collateral: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_storageT: PromiseOrValue<string>, _manager: PromiseOrValue<string>, _maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        maxNegativePnlOnOpenP(overrides?: CallOverrides): Promise<[BigNumber]>;
        pairFundingFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accPerOiLong: BigNumber;
            accPerOiShort: BigNumber;
            lastUpdateBlock: BigNumber;
        }>;
        pairParams(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            onePercentDepthAbove: BigNumber;
            onePercentDepthBelow: BigNumber;
            rolloverFeePerBlockP: BigNumber;
            fundingFeePerBlockP: BigNumber;
        }>;
        pairRolloverFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            accPerCollateral: BigNumber;
            lastUpdateBlock: BigNumber;
        }>;
        setFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFundingFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setManager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxNegativePnlOnOpenP(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOnePercentDepth(pairIndex: PromiseOrValue<BigNumberish>, valueAbove: PromiseOrValue<BigNumberish>, valueBelow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOnePercentDepthArray(indices: PromiseOrValue<BigNumberish>[], valuesAbove: PromiseOrValue<BigNumberish>[], valuesBelow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: PairInfos.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: PairInfos.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRolloverFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storageT(overrides?: CallOverrides): Promise<[string]>;
        storeTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tradeInitialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean
        ] & {
            rollover: BigNumber;
            funding: BigNumber;
            openedAfterUpdate: boolean;
        }>;
    };
    getAccFundingFeesLong(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccFundingFeesShort(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccFundingFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getAccRolloverFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getOnePercentDepthAbove(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getOnePercentDepthBelow(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPairInfos(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
        PairInfos.PairParamsStructOutput[],
        PairInfos.PairRolloverFeesStructOutput[],
        PairInfos.PairFundingFeesStructOutput[]
    ]>;
    getPendingAccFundingFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        valueLong: BigNumber;
        valueShort: BigNumber;
    }>;
    getPendingAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeFundingFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeFundingFeePure(accFundingFeesPerOi: PromiseOrValue<BigNumberish>, endAccFundingFeesPerOi: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeInitialAccFundingFeesPerOi(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeInitialAccRolloverFeesPerCollateral(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeLiquidationPrice(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeLiquidationPricePure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeOpenedAfterUpdate(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    getTradePriceImpact(openPrice: PromiseOrValue<BigNumberish>, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, tradeOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        priceImpactP: BigNumber;
        priceAfterImpact: BigNumber;
    }>;
    getTradePriceImpactPure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, startOpenInterest: PromiseOrValue<BigNumberish>, tradeOpenInterest: PromiseOrValue<BigNumberish>, onePercentDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        priceImpactP: BigNumber;
        priceAfterImpact: BigNumber;
    }>;
    getTradeRolloverFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeRolloverFeePure(accRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, endAccRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeValue(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getTradeValuePure(collateral: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_storageT: PromiseOrValue<string>, _manager: PromiseOrValue<string>, _maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    manager(overrides?: CallOverrides): Promise<string>;
    maxNegativePnlOnOpenP(overrides?: CallOverrides): Promise<BigNumber>;
    pairFundingFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        accPerOiLong: BigNumber;
        accPerOiShort: BigNumber;
        lastUpdateBlock: BigNumber;
    }>;
    pairParams(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        onePercentDepthAbove: BigNumber;
        onePercentDepthBelow: BigNumber;
        rolloverFeePerBlockP: BigNumber;
        fundingFeePerBlockP: BigNumber;
    }>;
    pairRolloverFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        accPerCollateral: BigNumber;
        lastUpdateBlock: BigNumber;
    }>;
    setFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFundingFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setManager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxNegativePnlOnOpenP(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOnePercentDepth(pairIndex: PromiseOrValue<BigNumberish>, valueAbove: PromiseOrValue<BigNumberish>, valueBelow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOnePercentDepthArray(indices: PromiseOrValue<BigNumberish>[], valuesAbove: PromiseOrValue<BigNumberish>[], valuesBelow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: PairInfos.PairParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: PairInfos.PairParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRolloverFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storageT(overrides?: CallOverrides): Promise<string>;
    storeTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tradeInitialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        boolean
    ] & {
        rollover: BigNumber;
        funding: BigNumber;
        openedAfterUpdate: boolean;
    }>;
    callStatic: {
        getAccFundingFeesLong(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccFundingFeesShort(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccFundingFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccRolloverFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOnePercentDepthAbove(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOnePercentDepthBelow(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairInfos(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[
            PairInfos.PairParamsStructOutput[],
            PairInfos.PairRolloverFeesStructOutput[],
            PairInfos.PairFundingFeesStructOutput[]
        ]>;
        getPendingAccFundingFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            valueLong: BigNumber;
            valueShort: BigNumber;
        }>;
        getPendingAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeFundingFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeFundingFeePure(accFundingFeesPerOi: PromiseOrValue<BigNumberish>, endAccFundingFeesPerOi: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccFundingFeesPerOi(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccRolloverFeesPerCollateral(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLiquidationPrice(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLiquidationPricePure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeOpenedAfterUpdate(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        getTradePriceImpact(openPrice: PromiseOrValue<BigNumberish>, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, tradeOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            priceImpactP: BigNumber;
            priceAfterImpact: BigNumber;
        }>;
        getTradePriceImpactPure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, startOpenInterest: PromiseOrValue<BigNumberish>, tradeOpenInterest: PromiseOrValue<BigNumberish>, onePercentDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            priceImpactP: BigNumber;
            priceAfterImpact: BigNumber;
        }>;
        getTradeRolloverFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeRolloverFeePure(accRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, endAccRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeValue(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeValuePure(collateral: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _manager: PromiseOrValue<string>, _maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        manager(overrides?: CallOverrides): Promise<string>;
        maxNegativePnlOnOpenP(overrides?: CallOverrides): Promise<BigNumber>;
        pairFundingFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            accPerOiLong: BigNumber;
            accPerOiShort: BigNumber;
            lastUpdateBlock: BigNumber;
        }>;
        pairParams(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            onePercentDepthAbove: BigNumber;
            onePercentDepthBelow: BigNumber;
            rolloverFeePerBlockP: BigNumber;
            fundingFeePerBlockP: BigNumber;
        }>;
        pairRolloverFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            accPerCollateral: BigNumber;
            lastUpdateBlock: BigNumber;
        }>;
        setFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setFundingFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setManager(_manager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setMaxNegativePnlOnOpenP(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOnePercentDepth(pairIndex: PromiseOrValue<BigNumberish>, valueAbove: PromiseOrValue<BigNumberish>, valueBelow: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setOnePercentDepthArray(indices: PromiseOrValue<BigNumberish>[], valuesAbove: PromiseOrValue<BigNumberish>[], valuesBelow: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: PairInfos.PairParamsStruct, overrides?: CallOverrides): Promise<void>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: PairInfos.PairParamsStruct[], overrides?: CallOverrides): Promise<void>;
        setRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRolloverFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        storageT(overrides?: CallOverrides): Promise<string>;
        storeTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        tradeInitialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean
        ] & {
            rollover: BigNumber;
            funding: BigNumber;
            openedAfterUpdate: boolean;
        }>;
    };
    filters: {
        "AccFundingFeesStored(uint256,int256,int256)"(pairIndex?: null, valueLong?: null, valueShort?: null): AccFundingFeesStoredEventFilter;
        AccFundingFeesStored(pairIndex?: null, valueLong?: null, valueShort?: null): AccFundingFeesStoredEventFilter;
        "AccRolloverFeesStored(uint256,uint256)"(pairIndex?: null, value?: null): AccRolloverFeesStoredEventFilter;
        AccRolloverFeesStored(pairIndex?: null, value?: null): AccRolloverFeesStoredEventFilter;
        "FeesCharged(uint256,bool,uint256,uint256,int256,uint256,int256)"(pairIndex?: null, long?: null, collateral?: null, leverage?: null, percentProfit?: null, rolloverFees?: null, fundingFees?: null): FeesChargedEventFilter;
        FeesCharged(pairIndex?: null, long?: null, collateral?: null, leverage?: null, percentProfit?: null, rolloverFees?: null, fundingFees?: null): FeesChargedEventFilter;
        "FundingFeePerBlockPUpdated(uint256,uint256)"(pairIndex?: null, value?: null): FundingFeePerBlockPUpdatedEventFilter;
        FundingFeePerBlockPUpdated(pairIndex?: null, value?: null): FundingFeePerBlockPUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "ManagerUpdated(address)"(value?: null): ManagerUpdatedEventFilter;
        ManagerUpdated(value?: null): ManagerUpdatedEventFilter;
        "MaxNegativePnlOnOpenPUpdated(uint256)"(value?: null): MaxNegativePnlOnOpenPUpdatedEventFilter;
        MaxNegativePnlOnOpenPUpdated(value?: null): MaxNegativePnlOnOpenPUpdatedEventFilter;
        "OnePercentDepthUpdated(uint256,uint256,uint256)"(pairIndex?: null, valueAbove?: null, valueBelow?: null): OnePercentDepthUpdatedEventFilter;
        OnePercentDepthUpdated(pairIndex?: null, valueAbove?: null, valueBelow?: null): OnePercentDepthUpdatedEventFilter;
        "PairParamsUpdated(uint256,tuple)"(pairIndex?: null, value?: null): PairParamsUpdatedEventFilter;
        PairParamsUpdated(pairIndex?: null, value?: null): PairParamsUpdatedEventFilter;
        "RolloverFeePerBlockPUpdated(uint256,uint256)"(pairIndex?: null, value?: null): RolloverFeePerBlockPUpdatedEventFilter;
        RolloverFeePerBlockPUpdated(pairIndex?: null, value?: null): RolloverFeePerBlockPUpdatedEventFilter;
        "TradeInitialAccFeesStored(address,uint256,uint256,uint256,int256)"(trader?: null, pairIndex?: null, index?: null, rollover?: null, funding?: null): TradeInitialAccFeesStoredEventFilter;
        TradeInitialAccFeesStored(trader?: null, pairIndex?: null, index?: null, rollover?: null, funding?: null): TradeInitialAccFeesStoredEventFilter;
    };
    estimateGas: {
        getAccFundingFeesLong(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccFundingFeesShort(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccFundingFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAccRolloverFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOnePercentDepthAbove(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOnePercentDepthBelow(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPairInfos(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccFundingFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPendingAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeFundingFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeFundingFeePure(accFundingFeesPerOi: PromiseOrValue<BigNumberish>, endAccFundingFeesPerOi: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccFundingFeesPerOi(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeInitialAccRolloverFeesPerCollateral(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLiquidationPrice(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLiquidationPricePure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeOpenedAfterUpdate(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradePriceImpact(openPrice: PromiseOrValue<BigNumberish>, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, tradeOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradePriceImpactPure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, startOpenInterest: PromiseOrValue<BigNumberish>, tradeOpenInterest: PromiseOrValue<BigNumberish>, onePercentDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeRolloverFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeRolloverFeePure(accRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, endAccRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeValue(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getTradeValuePure(collateral: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_storageT: PromiseOrValue<string>, _manager: PromiseOrValue<string>, _maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        maxNegativePnlOnOpenP(overrides?: CallOverrides): Promise<BigNumber>;
        pairFundingFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairParams(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pairRolloverFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFundingFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setManager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxNegativePnlOnOpenP(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOnePercentDepth(pairIndex: PromiseOrValue<BigNumberish>, valueAbove: PromiseOrValue<BigNumberish>, valueBelow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOnePercentDepthArray(indices: PromiseOrValue<BigNumberish>[], valuesAbove: PromiseOrValue<BigNumberish>[], valuesBelow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: PairInfos.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: PairInfos.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRolloverFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storageT(overrides?: CallOverrides): Promise<BigNumber>;
        storeTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tradeInitialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAccFundingFeesLong(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccFundingFeesShort(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccFundingFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccRolloverFeesUpdateBlock(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOnePercentDepthAbove(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOnePercentDepthBelow(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPairInfos(indices: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingAccFundingFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPendingAccRolloverFees(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeFundingFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeFundingFeePure(accFundingFeesPerOi: PromiseOrValue<BigNumberish>, endAccFundingFeesPerOi: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeInitialAccFundingFeesPerOi(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeInitialAccRolloverFeesPerCollateral(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeLiquidationPrice(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeLiquidationPricePure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeOpenedAfterUpdate(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradePriceImpact(openPrice: PromiseOrValue<BigNumberish>, pairIndex: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, tradeOpenInterest: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradePriceImpactPure(openPrice: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, startOpenInterest: PromiseOrValue<BigNumberish>, tradeOpenInterest: PromiseOrValue<BigNumberish>, onePercentDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeRolloverFee(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeRolloverFeePure(accRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, endAccRolloverFeesPerCollateral: PromiseOrValue<BigNumberish>, collateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeValue(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, collateral: PromiseOrValue<BigNumberish>, leverage: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getTradeValuePure(collateral: PromiseOrValue<BigNumberish>, percentProfit: PromiseOrValue<BigNumberish>, rolloverFee: PromiseOrValue<BigNumberish>, fundingFee: PromiseOrValue<BigNumberish>, closingFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_storageT: PromiseOrValue<string>, _manager: PromiseOrValue<string>, _maxNegativePnlOnOpenP: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxNegativePnlOnOpenP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFundingFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairParams(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairRolloverFees(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFundingFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFundingFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setManager(_manager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxNegativePnlOnOpenP(value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOnePercentDepth(pairIndex: PromiseOrValue<BigNumberish>, valueAbove: PromiseOrValue<BigNumberish>, valueBelow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOnePercentDepthArray(indices: PromiseOrValue<BigNumberish>[], valuesAbove: PromiseOrValue<BigNumberish>[], valuesBelow: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairParams(pairIndex: PromiseOrValue<BigNumberish>, value: PairInfos.PairParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPairParamsArray(indices: PromiseOrValue<BigNumberish>[], values: PairInfos.PairParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRolloverFeePerBlockP(pairIndex: PromiseOrValue<BigNumberish>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRolloverFeePerBlockPArray(indices: PromiseOrValue<BigNumberish>[], values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storageT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storeTradeInitialAccFees(trader: PromiseOrValue<string>, pairIndex: PromiseOrValue<BigNumberish>, index: PromiseOrValue<BigNumberish>, long: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tradeInitialAccFees(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
