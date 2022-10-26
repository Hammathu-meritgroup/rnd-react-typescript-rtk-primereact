import { emptySplitApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({ 
  endpoints: (build) => ({
    customerTypeGetAll: build.query<
      CustomerTypeGetAllApiResponse,
      CustomerTypeGetAllApiArg
    >({
      query: () => ({ url: `/api/CustomerType/Get` }),
    }),
    customerTypeGet: build.query<
      CustomerTypeGetApiResponse,
      CustomerTypeGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/CustomerType/Get/${queryArg.id}` }),
    }),
    customerTypePost: build.mutation<
      CustomerTypePostApiResponse,
      CustomerTypePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CustomerType/Post`,
        method: "POST",
        body: queryArg.customerType,
      }),
    }),
    customerTypePut: build.mutation<
      CustomerTypePutApiResponse,
      CustomerTypePutApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CustomerType/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.customerType,
      }),
    }),
    customerTypeDelete: build.mutation<
      CustomerTypeDeleteApiResponse,
      CustomerTypeDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/CustomerType/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    customerGetAll: build.query<
      CustomerGetAllApiResponse,
      CustomerGetAllApiArg
    >({
      query: () => ({ url: `/api/Customer/Get` }),
    }),
    customerGet: build.query<CustomerGetApiResponse, CustomerGetApiArg>({
      query: (queryArg) => ({ url: `/api/Customer/Get/${queryArg.id}` }),
    }),
    customerPost: build.mutation<CustomerPostApiResponse, CustomerPostApiArg>({
      query: (queryArg) => ({
        url: `/api/Customer/Post`,
        method: "POST",
        body: queryArg.customer,
      }),
    }),
    customerPut: build.mutation<CustomerPutApiResponse, CustomerPutApiArg>({
      query: (queryArg) => ({
        url: `/api/Customer/Put/${queryArg.id}`,
        method: "PUT",
        body: queryArg.customer,
      }),
    }),
    customerDelete: build.mutation<
      CustomerDeleteApiResponse,
      CustomerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Customer/Delete/${queryArg.id}`,
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type CustomerTypeGetAllApiResponse = /** status 200  */ CustomerType[];
export type CustomerTypeGetAllApiArg = void;
export type CustomerTypeGetApiResponse = /** status 200  */ CustomerType;
export type CustomerTypeGetApiArg = {
  id: number;
};
export type CustomerTypePostApiResponse = unknown;
export type CustomerTypePostApiArg = {
  customerType: CustomerType;
};
export type CustomerTypePutApiResponse = unknown;
export type CustomerTypePutApiArg = {
  id: number;
  customerType: CustomerType;
};
export type CustomerTypeDeleteApiResponse = unknown;
export type CustomerTypeDeleteApiArg = {
  id: number;
};
export type CustomerGetAllApiResponse = /** status 200  */ Customer[];
export type CustomerGetAllApiArg = void;
export type CustomerGetApiResponse = /** status 200  */ Customer;
export type CustomerGetApiArg = {
  id: number;
};
export type CustomerPostApiResponse = unknown;
export type CustomerPostApiArg = {
  customer: Customer;
};
export type CustomerPutApiResponse = unknown;
export type CustomerPutApiArg = {
  id: number;
  customer: Customer;
};
export type CustomerDeleteApiResponse = unknown;
export type CustomerDeleteApiArg = {
  id: number;
};
export type CardGetCardByCustomerIdApiResponse = /** status 200  */ Card[];
export type CardGetCardByCustomerIdApiArg = {
  customerId?: number;
};
export type BaseEntity = {
  id?: number;
  createdBy?: string | null;
  createdOn?: string;
  modifiedBy?: string | null;
  modifiedOn?: string;
};
export type CustomerType = BaseEntity & {
  name?: string | null;
};
export type Customer = BaseEntity & {
  customerTypeId?: number;
  name?: string | null;
  code?: string | null;
  contactNumber?: string | null;
  alternateContactNumber?: string | null;
  email?: string | null;
  agentCustomerId?: number;
  isActive?: boolean;
};
export type Card = BaseEntity & {
  customerId?: number;
  cardNumber?: string | null;
  percentageOnPayment?: number;
  isActive?: boolean;
};
export const {
  useCustomerTypeGetAllQuery,
  useCustomerTypeGetQuery,
  useCustomerTypePostMutation,
  useCustomerTypePutMutation,
  useCustomerTypeDeleteMutation,
  useCustomerGetAllQuery,
  useCustomerGetQuery,
  useCustomerPostMutation,
  useCustomerPutMutation,
  useCustomerDeleteMutation,
  useCardGetCardByCustomerIdQuery,
} = injectedRtkApi;
