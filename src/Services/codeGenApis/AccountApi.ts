import { emptySplitApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    accountRegister: build.mutation<
      AccountRegisterApiResponse,
      AccountRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Account/Register`,
        method: "POST",
        body: queryArg.registerDto,
      }),
    }),
    accountLogin: build.mutation<AccountLoginApiResponse, AccountLoginApiArg>({
      query: (queryArg) => ({
        url: `/api/Account/Login`,
        method: "POST",
        body: queryArg.loginDto,
      }),
    }),
    accountAddUserToRole: build.mutation<
      AccountAddUserToRoleApiResponse,
      AccountAddUserToRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Account/AddUserToRole`,
        method: "POST",
        body: queryArg.userRoleDto,
      }),
    }),
    accountAddRole: build.query<
      AccountAddRoleApiResponse,
      AccountAddRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Account/AddRole/${queryArg.roleName}`,
      }),
    }),
    accountAddRoleclaims: build.mutation<
      AccountAddRoleclaimsApiResponse,
      AccountAddRoleclaimsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Account/AddRoleclaims`,
        method: "POST",
        body: queryArg.roleClaimDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type AccountRegisterApiResponse = /** status 200  */ IdentityResult;
export type AccountRegisterApiArg = {
  registerDto: RegisterDto;
};
export type AccountLoginApiResponse = /** status 200  */ LoginResultDto;
export type AccountLoginApiArg = {
  loginDto: LoginDto;
};
export type AccountAddUserToRoleApiResponse = /** status 200  */ IdentityResult;
export type AccountAddUserToRoleApiArg = {
  userRoleDto: UserRoleDto;
};
export type AccountAddRoleApiResponse = /** status 200  */ IdentityResult;
export type AccountAddRoleApiArg = {
  roleName: string | null;
};
export type AccountAddRoleclaimsApiResponse = /** status 200  */ IdentityResult;
export type AccountAddRoleclaimsApiArg = {
  roleClaimDto: RoleClaimDto;
};
export type IdentityError = {
  code?: string | null;
  description?: string | null;
};
export type IdentityResult = {
  succeeded?: boolean;
  errors?: IdentityError[] | null;
};
export type RegisterDto = {
  userName?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
};
export type UserinfoDto = {
  userId?: string | null;
  username?: string | null;
  email?: string | null;
  roleId?: string | null;
  role?: string | null;
  roleClaims?: string[] | null;
  userClaims?: string[] | null;
};
export type LoginResultDto = {
  token?: string | null;
  tokenExpiration?: string;
  userInfo?: UserinfoDto | null;
};
export type LoginDto = {
  username?: string | null;
  password?: string | null;
  rememberMe?: boolean;
  lockonFailure?: boolean;
};
export type UserRoleDto = {
  username?: string | null;
  roleName?: string | null;
};
export type RoleClaimDto = {
  role?: string | null;
  claims?: string[] | null;
};
export const {
  useAccountRegisterMutation,
  useAccountLoginMutation,
  useAccountAddUserToRoleMutation,
  useAccountAddRoleQuery,
  useAccountAddRoleclaimsMutation,
} = injectedRtkApi;
