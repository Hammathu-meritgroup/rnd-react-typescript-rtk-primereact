import { emptySplitApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    cardBillGetCardBills: build.query<
      CardBillGetCardBillsApiResponse,
      CardBillGetCardBillsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBill/GetCardBills`,
        params: { cardId: queryArg.cardId },
      }),
    }),
    cardBillGetBillsToProcess: build.query<
      CardBillGetBillsToProcessApiResponse,
      CardBillGetBillsToProcessApiArg
    >({
      query: () => ({ url: `/api/CardBill/GetBillsToProcess` }),
    }),
    cardBillAddPaymentToBill: build.mutation<
      CardBillAddPaymentToBillApiResponse,
      CardBillAddPaymentToBillApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBill/AddPaymentToBill`,
        method: "POST",
        body: queryArg.cardBillPayment,
      }),
    }),
    cardBillAddSwipesToBill: build.mutation<
      CardBillAddSwipesToBillApiResponse,
      CardBillAddSwipesToBillApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBill/AddSwipesToBill`,
        method: "POST",
        body: queryArg.cardBillSwipe,
      }),
    }),
    cardBillGetAll: build.query<
      CardBillGetAllApiResponse,
      CardBillGetAllApiArg
    >({
      query: () => ({ url: `/api/CardBill/Get` }),
    }),
    cardBillGet: build.query<CardBillGetApiResponse, CardBillGetApiArg>({
      query: (queryArg) => ({ url: `/api/CardBill/Get/${queryArg.id}` }),
    }),
    cardBillPost: build.mutation<CardBillPostApiResponse, CardBillPostApiArg>({
      query: (queryArg) => ({
        url: `/api/CardBill/Post`,
        method: "POST",
        body: queryArg.cardBill,
      }),
    }),
    cardBillPut: build.mutation<CardBillPutApiResponse, CardBillPutApiArg>({
      query: (queryArg) => ({
        url: `/api/CardBill/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.cardBill,
      }),
    }),
    cardBillDelete: build.mutation<
      CardBillDeleteApiResponse,
      CardBillDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBill/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    cardGetCardByCustomerId: build.query<
      CardGetCardByCustomerIdApiResponse,
      CardGetCardByCustomerIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Card/GetCardByCustomerId`,
        params: { CustomerId: queryArg.customerId },
      }),
    }),
    cardGetAll: build.query<CardGetAllApiResponse, CardGetAllApiArg>({
      query: () => ({ url: `/api/Card/Get` }),
    }),
    cardGet: build.query<CardGetApiResponse, CardGetApiArg>({
      query: (queryArg) => ({ url: `/api/Card/Get/${queryArg.id}` }),
    }),
    cardPost: build.mutation<CardPostApiResponse, CardPostApiArg>({
      query: (queryArg) => ({
        url: `/api/Card/Post`,
        method: "POST",
        body: queryArg.card,
      }),
    }),
    cardPut: build.mutation<CardPutApiResponse, CardPutApiArg>({
      query: (queryArg) => ({
        url: `/api/Card/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.card,
      }),
    }),
    cardDelete: build.mutation<CardDeleteApiResponse, CardDeleteApiArg>({
      query: (queryArg) => ({
        url: `/api/Card/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    cardBillPaymentGetPaymentDetail: build.query<
      CardBillPaymentGetPaymentDetailApiResponse,
      CardBillPaymentGetPaymentDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillPayment/GetPaymentDetail`,
        params: { billId: queryArg.billId },
      }),
    }),
    cardBillPaymentGetAll: build.query<
      CardBillPaymentGetAllApiResponse,
      CardBillPaymentGetAllApiArg
    >({
      query: () => ({ url: `/api/CardBillPayment/Get` }),
    }),
    cardBillPaymentGet: build.query<
      CardBillPaymentGetApiResponse,
      CardBillPaymentGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/CardBillPayment/Get/${queryArg.id}` }),
    }),
    cardBillPaymentPost: build.mutation<
      CardBillPaymentPostApiResponse,
      CardBillPaymentPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillPayment/Post`,
        method: "POST",
        body: queryArg.cardBillPayment,
      }),
    }),
    cardBillPaymentPut: build.mutation<
      CardBillPaymentPutApiResponse,
      CardBillPaymentPutApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillPayment/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.cardBillPayment,
      }),
    }),
    cardBillPaymentDelete: build.mutation<
      CardBillPaymentDeleteApiResponse,
      CardBillPaymentDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillPayment/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    cardBillSwipeGetSwipeDetail: build.query<
      CardBillSwipeGetSwipeDetailApiResponse,
      CardBillSwipeGetSwipeDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillSwipe/GetSwipeDetail`,
        params: { billId: queryArg.billId },
      }),
    }),
    cardBillSwipeGetAll: build.query<
      CardBillSwipeGetAllApiResponse,
      CardBillSwipeGetAllApiArg
    >({
      query: () => ({ url: `/api/CardBillSwipe/Get` }),
    }),
    cardBillSwipeGet: build.query<
      CardBillSwipeGetApiResponse,
      CardBillSwipeGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/CardBillSwipe/Get/${queryArg.id}` }),
    }),
    cardBillSwipePost: build.mutation<
      CardBillSwipePostApiResponse,
      CardBillSwipePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillSwipe/Post`,
        method: "POST",
        body: queryArg.cardBillSwipe,
      }),
    }),
    cardBillSwipePut: build.mutation<
      CardBillSwipePutApiResponse,
      CardBillSwipePutApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillSwipe/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.cardBillSwipe,
      }),
    }),
    cardBillSwipeDelete: build.mutation<
      CardBillSwipeDeleteApiResponse,
      CardBillSwipeDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CardBillSwipe/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type CardBillGetCardBillsApiResponse = /** status 200  */ CardBill[];
export type CardBillGetCardBillsApiArg = {
  cardId?: number;
};
export type CardBillGetBillsToProcessApiResponse =
  /** status 200  */ BillToProcessResponce[];
export type CardBillGetBillsToProcessApiArg = void;
export type CardBillAddPaymentToBillApiResponse =
  /** status 200  */ BaseResponce;
export type CardBillAddPaymentToBillApiArg = {
  cardBillPayment: CardBillPayment;
};
export type CardBillAddSwipesToBillApiResponse =
  /** status 200  */ BaseResponce;
export type CardBillAddSwipesToBillApiArg = {
  cardBillSwipe: CardBillSwipe;
};
export type CardBillGetAllApiResponse = /** status 200  */ CardBill[];
export type CardBillGetAllApiArg = void;
export type CardBillGetApiResponse = /** status 200  */ CardBill;
export type CardBillGetApiArg = {
  id: number;
};
export type CardBillPostApiResponse = unknown;
export type CardBillPostApiArg = {
  cardBill: CardBill;
};
export type CardBillPutApiResponse = unknown;
export type CardBillPutApiArg = {
  id: number;
  cardBill: CardBill;
};
export type CardBillDeleteApiResponse = unknown;
export type CardBillDeleteApiArg = {
  id: number;
};
export type CardGetCardByCustomerIdApiResponse = /** status 200  */ Card[];
export type CardGetCardByCustomerIdApiArg = {
  customerId?: number;
};
export type CardGetAllApiResponse = /** status 200  */ Card[];
export type CardGetAllApiArg = void;
export type CardGetApiResponse = /** status 200  */ Card;
export type CardGetApiArg = {
  id: number;
};
export type CardPostApiResponse = unknown;
export type CardPostApiArg = {
  card: Card;
};
export type CardPutApiResponse = unknown;
export type CardPutApiArg = {
  id: number;
  card: Card;
};
export type CardDeleteApiResponse = unknown;
export type CardDeleteApiArg = {
  id: number;
};
export type CardBillPaymentGetPaymentDetailApiResponse =
  /** status 200  */ CardBillPayment[];
export type CardBillPaymentGetPaymentDetailApiArg = {
  billId?: number;
};
export type CardBillPaymentGetAllApiResponse =
  /** status 200  */ CardBillPayment[];
export type CardBillPaymentGetAllApiArg = void;
export type CardBillPaymentGetApiResponse = /** status 200  */ CardBillPayment;
export type CardBillPaymentGetApiArg = {
  id: number;
};
export type CardBillPaymentPostApiResponse = unknown;
export type CardBillPaymentPostApiArg = {
  cardBillPayment: CardBillPayment;
};
export type CardBillPaymentPutApiResponse = unknown;
export type CardBillPaymentPutApiArg = {
  id: number;
  cardBillPayment: CardBillPayment;
};
export type CardBillPaymentDeleteApiResponse = unknown;
export type CardBillPaymentDeleteApiArg = {
  id: number;
};
export type CardBillSwipeGetSwipeDetailApiResponse =
  /** status 200  */ CardBillSwipe[];
export type CardBillSwipeGetSwipeDetailApiArg = {
  billId?: number;
};
export type CardBillSwipeGetAllApiResponse = /** status 200  */ CardBillSwipe[];
export type CardBillSwipeGetAllApiArg = void;
export type CardBillSwipeGetApiResponse = /** status 200  */ CardBillSwipe;
export type CardBillSwipeGetApiArg = {
  id: number;
};
export type CardBillSwipePostApiResponse = unknown;
export type CardBillSwipePostApiArg = {
  cardBillSwipe: CardBillSwipe;
};
export type CardBillSwipePutApiResponse = unknown;
export type CardBillSwipePutApiArg = {
  id: number;
  cardBillSwipe: CardBillSwipe;
};
export type CardBillSwipeDeleteApiResponse = unknown;
export type CardBillSwipeDeleteApiArg = {
  id: number;
};
export type BaseEntity = {
  id?: number;
  createdBy?: string | null;
  createdOn?: string;
  modifiedBy?: string | null;
  modifiedOn?: string;
};
export type CardBill = BaseEntity & {
  batchId?: number;
  cardId?: number;
  billAmount?: number;
  dueAmount?: number;
  billDate?: string | null;
  dueDate?: string | null;
  paidAmount?: number;
  appliedChargesOnPaid?: number;
  swipeAmount?: number;
  appliedChargesOnSwipe?: number;
  netAppliedCharges?: number;
  chargesCarryForward?: number;
  chargesBroughtForward?: number;
  chargesDue?: number;
  agentRewards?: number;
  isChargesRecieved?: boolean;
  isAgentRewardPaid?: boolean;
};
export type BillToProcessResponce = {
  billId?: number;
  batchId?: number;
  cardId?: number;
  batchStartDate?: string | null;
  batchEndDate?: string | null;
  card?: string | null;
  customerName?: string | null;
  customerCode?: string | null;
  billAmount?: number;
  dueAmount?: number;
  billDate?: string | null;
  dueDate?: string | null;
  paidAmount?: number;
  swipeAmount?: number;
  netAppliedCharges?: number;
};
export type BaseResponce = {
  isSuccess?: boolean;
  message?: string | null;
};
export type CardBillPayment = BaseEntity & {
  batchId?: number;
  cardBillId?: number;
  paidAmount?: number;
  paidOnDate?: string | null;
  percentageOnPayment?: number;
  appliedCharges?: number;
};
export type CardBillSwipe = BaseEntity & {
  batchId?: number;
  cardBillId?: number;
  swipedAmount?: number;
  swipedOn?: string | null;
  swipeTypeId?: number;
  percentageOnSwipe?: number;
  appliedCharges?: number;
  swipeStatus?: number;
};
export type Card = BaseEntity & {
  customerId?: number;
  cardNumber?: string | null;
  percentageOnPayment?: number;
  isActive?: boolean;
};
export const {
  useCardBillGetCardBillsQuery,
  useCardBillGetBillsToProcessQuery,
  useCardBillAddPaymentToBillMutation,
  useCardBillAddSwipesToBillMutation,
  useCardBillGetAllQuery,
  useCardBillGetQuery,
  useCardBillPostMutation,
  useCardBillPutMutation,
  useCardBillDeleteMutation,
  useCardGetCardByCustomerIdQuery,
  useCardGetAllQuery,
  useCardGetQuery,
  useCardPostMutation,
  useCardPutMutation,
  useCardDeleteMutation,
  useCardBillPaymentGetPaymentDetailQuery,
  useCardBillPaymentGetAllQuery,
  useCardBillPaymentGetQuery,
  useCardBillPaymentPostMutation,
  useCardBillPaymentPutMutation,
  useCardBillPaymentDeleteMutation,
  useCardBillSwipeGetSwipeDetailQuery,
  useCardBillSwipeGetAllQuery,
  useCardBillSwipeGetQuery,
  useCardBillSwipePostMutation,
  useCardBillSwipePutMutation,
  useCardBillSwipeDeleteMutation,
} = injectedRtkApi;
