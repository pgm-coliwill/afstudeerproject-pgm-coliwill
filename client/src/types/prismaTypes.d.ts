
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model YouthMovement
 * 
 */
export type YouthMovement = $Result.DefaultSelection<Prisma.$YouthMovementPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model YouthMovementUser
 * 
 */
export type YouthMovementUser = $Result.DefaultSelection<Prisma.$YouthMovementUserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostLike
 * 
 */
export type PostLike = $Result.DefaultSelection<Prisma.$PostLikePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model LeadersGroup
 * 
 */
export type LeadersGroup = $Result.DefaultSelection<Prisma.$LeadersGroupPayload>
/**
 * Model ParentChild
 * 
 */
export type ParentChild = $Result.DefaultSelection<Prisma.$ParentChildPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ouder: 'ouder',
  leider: 'leider',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ParentRelation: {
  moeder: 'moeder',
  vader: 'vader',
  voogd: 'voogd',
  stiefouder: 'stiefouder'
};

export type ParentRelation = (typeof ParentRelation)[keyof typeof ParentRelation]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ParentRelation = $Enums.ParentRelation

export const ParentRelation: typeof $Enums.ParentRelation

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more YouthMovements
 * const youthMovements = await prisma.youthMovement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more YouthMovements
   * const youthMovements = await prisma.youthMovement.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.youthMovement`: Exposes CRUD operations for the **YouthMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YouthMovements
    * const youthMovements = await prisma.youthMovement.findMany()
    * ```
    */
  get youthMovement(): Prisma.YouthMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youthMovementUser`: Exposes CRUD operations for the **YouthMovementUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YouthMovementUsers
    * const youthMovementUsers = await prisma.youthMovementUser.findMany()
    * ```
    */
  get youthMovementUser(): Prisma.YouthMovementUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLike`: Exposes CRUD operations for the **PostLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLike.findMany()
    * ```
    */
  get postLike(): Prisma.PostLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadersGroup`: Exposes CRUD operations for the **LeadersGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadersGroups
    * const leadersGroups = await prisma.leadersGroup.findMany()
    * ```
    */
  get leadersGroup(): Prisma.LeadersGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parentChild`: Exposes CRUD operations for the **ParentChild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentChildren
    * const parentChildren = await prisma.parentChild.findMany()
    * ```
    */
  get parentChild(): Prisma.ParentChildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    YouthMovement: 'YouthMovement',
    User: 'User',
    YouthMovementUser: 'YouthMovementUser',
    Invitation: 'Invitation',
    Group: 'Group',
    Post: 'Post',
    PostLike: 'PostLike',
    Event: 'Event',
    Attendee: 'Attendee',
    Volunteer: 'Volunteer',
    LeadersGroup: 'LeadersGroup',
    ParentChild: 'ParentChild',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "youthMovement" | "user" | "youthMovementUser" | "invitation" | "group" | "post" | "postLike" | "event" | "attendee" | "volunteer" | "leadersGroup" | "parentChild" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      YouthMovement: {
        payload: Prisma.$YouthMovementPayload<ExtArgs>
        fields: Prisma.YouthMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YouthMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YouthMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          findFirst: {
            args: Prisma.YouthMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YouthMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          findMany: {
            args: Prisma.YouthMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>[]
          }
          create: {
            args: Prisma.YouthMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          createMany: {
            args: Prisma.YouthMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YouthMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>[]
          }
          delete: {
            args: Prisma.YouthMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          update: {
            args: Prisma.YouthMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          deleteMany: {
            args: Prisma.YouthMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YouthMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YouthMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>[]
          }
          upsert: {
            args: Prisma.YouthMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementPayload>
          }
          aggregate: {
            args: Prisma.YouthMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYouthMovement>
          }
          groupBy: {
            args: Prisma.YouthMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<YouthMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.YouthMovementCountArgs<ExtArgs>
            result: $Utils.Optional<YouthMovementCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      YouthMovementUser: {
        payload: Prisma.$YouthMovementUserPayload<ExtArgs>
        fields: Prisma.YouthMovementUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YouthMovementUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YouthMovementUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          findFirst: {
            args: Prisma.YouthMovementUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YouthMovementUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          findMany: {
            args: Prisma.YouthMovementUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>[]
          }
          create: {
            args: Prisma.YouthMovementUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          createMany: {
            args: Prisma.YouthMovementUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YouthMovementUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>[]
          }
          delete: {
            args: Prisma.YouthMovementUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          update: {
            args: Prisma.YouthMovementUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          deleteMany: {
            args: Prisma.YouthMovementUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YouthMovementUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YouthMovementUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>[]
          }
          upsert: {
            args: Prisma.YouthMovementUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YouthMovementUserPayload>
          }
          aggregate: {
            args: Prisma.YouthMovementUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYouthMovementUser>
          }
          groupBy: {
            args: Prisma.YouthMovementUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<YouthMovementUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.YouthMovementUserCountArgs<ExtArgs>
            result: $Utils.Optional<YouthMovementUserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostLike: {
        payload: Prisma.$PostLikePayload<ExtArgs>
        fields: Prisma.PostLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findFirst: {
            args: Prisma.PostLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findMany: {
            args: Prisma.PostLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          create: {
            args: Prisma.PostLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          createMany: {
            args: Prisma.PostLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          delete: {
            args: Prisma.PostLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          update: {
            args: Prisma.PostLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          deleteMany: {
            args: Prisma.PostLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          upsert: {
            args: Prisma.PostLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          aggregate: {
            args: Prisma.PostLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLike>
          }
          groupBy: {
            args: Prisma.PostLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikeCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      LeadersGroup: {
        payload: Prisma.$LeadersGroupPayload<ExtArgs>
        fields: Prisma.LeadersGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadersGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadersGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          findFirst: {
            args: Prisma.LeadersGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadersGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          findMany: {
            args: Prisma.LeadersGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>[]
          }
          create: {
            args: Prisma.LeadersGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          createMany: {
            args: Prisma.LeadersGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadersGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>[]
          }
          delete: {
            args: Prisma.LeadersGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          update: {
            args: Prisma.LeadersGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          deleteMany: {
            args: Prisma.LeadersGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadersGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadersGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>[]
          }
          upsert: {
            args: Prisma.LeadersGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersGroupPayload>
          }
          aggregate: {
            args: Prisma.LeadersGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadersGroup>
          }
          groupBy: {
            args: Prisma.LeadersGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadersGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadersGroupCountArgs<ExtArgs>
            result: $Utils.Optional<LeadersGroupCountAggregateOutputType> | number
          }
        }
      }
      ParentChild: {
        payload: Prisma.$ParentChildPayload<ExtArgs>
        fields: Prisma.ParentChildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentChildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentChildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findFirst: {
            args: Prisma.ParentChildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentChildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          findMany: {
            args: Prisma.ParentChildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          create: {
            args: Prisma.ParentChildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          createMany: {
            args: Prisma.ParentChildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentChildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          delete: {
            args: Prisma.ParentChildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          update: {
            args: Prisma.ParentChildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          deleteMany: {
            args: Prisma.ParentChildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentChildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentChildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>[]
          }
          upsert: {
            args: Prisma.ParentChildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentChildPayload>
          }
          aggregate: {
            args: Prisma.ParentChildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentChild>
          }
          groupBy: {
            args: Prisma.ParentChildGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentChildGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentChildCountArgs<ExtArgs>
            result: $Utils.Optional<ParentChildCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    youthMovement?: YouthMovementOmit
    user?: UserOmit
    youthMovementUser?: YouthMovementUserOmit
    invitation?: InvitationOmit
    group?: GroupOmit
    post?: PostOmit
    postLike?: PostLikeOmit
    event?: EventOmit
    attendee?: AttendeeOmit
    volunteer?: VolunteerOmit
    leadersGroup?: LeadersGroupOmit
    parentChild?: ParentChildOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type YouthMovementCountOutputType
   */

  export type YouthMovementCountOutputType = {
    groups: number
    users: number
    invites: number
  }

  export type YouthMovementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | YouthMovementCountOutputTypeCountGroupsArgs
    users?: boolean | YouthMovementCountOutputTypeCountUsersArgs
    invites?: boolean | YouthMovementCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes
  /**
   * YouthMovementCountOutputType without action
   */
  export type YouthMovementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementCountOutputType
     */
    select?: YouthMovementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YouthMovementCountOutputType without action
   */
  export type YouthMovementCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * YouthMovementCountOutputType without action
   */
  export type YouthMovementCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouthMovementUserWhereInput
  }

  /**
   * YouthMovementCountOutputType without action
   */
  export type YouthMovementCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    youthMovements: number
    posts: number
    postLikes: number
    messagesSent: number
    messagesReceived: number
    attendees: number
    volunteers: number
    leadersGroups: number
    parentChild: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovements?: boolean | UserCountOutputTypeCountYouthMovementsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postLikes?: boolean | UserCountOutputTypeCountPostLikesArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    attendees?: boolean | UserCountOutputTypeCountAttendeesArgs
    volunteers?: boolean | UserCountOutputTypeCountVolunteersArgs
    leadersGroups?: boolean | UserCountOutputTypeCountLeadersGroupsArgs
    parentChild?: boolean | UserCountOutputTypeCountParentChildArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountYouthMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouthMovementUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVolunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeadersGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadersGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParentChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    posts: number
    events: number
    leadersGroups: number
    parentChild: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | GroupCountOutputTypeCountPostsArgs
    events?: boolean | GroupCountOutputTypeCountEventsArgs
    leadersGroups?: boolean | GroupCountOutputTypeCountLeadersGroupsArgs
    parentChild?: boolean | GroupCountOutputTypeCountParentChildArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountLeadersGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadersGroupWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountParentChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    likes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendees: number
    volunteers: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
    volunteers?: boolean | EventCountOutputTypeCountVolunteersArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVolunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model YouthMovement
   */

  export type AggregateYouthMovement = {
    _count: YouthMovementCountAggregateOutputType | null
    _avg: YouthMovementAvgAggregateOutputType | null
    _sum: YouthMovementSumAggregateOutputType | null
    _min: YouthMovementMinAggregateOutputType | null
    _max: YouthMovementMaxAggregateOutputType | null
  }

  export type YouthMovementAvgAggregateOutputType = {
    id: number | null
    postalCode: number | null
    houseNumber: number | null
  }

  export type YouthMovementSumAggregateOutputType = {
    id: number | null
    postalCode: number | null
    houseNumber: number | null
  }

  export type YouthMovementMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    city: string | null
    postalCode: number | null
    street: string | null
    houseNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YouthMovementMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    city: string | null
    postalCode: number | null
    street: string | null
    houseNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YouthMovementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    city: number
    postalCode: number
    street: number
    houseNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YouthMovementAvgAggregateInputType = {
    id?: true
    postalCode?: true
    houseNumber?: true
  }

  export type YouthMovementSumAggregateInputType = {
    id?: true
    postalCode?: true
    houseNumber?: true
  }

  export type YouthMovementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YouthMovementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YouthMovementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    city?: true
    postalCode?: true
    street?: true
    houseNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YouthMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouthMovement to aggregate.
     */
    where?: YouthMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovements to fetch.
     */
    orderBy?: YouthMovementOrderByWithRelationInput | YouthMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YouthMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YouthMovements
    **/
    _count?: true | YouthMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YouthMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YouthMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YouthMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YouthMovementMaxAggregateInputType
  }

  export type GetYouthMovementAggregateType<T extends YouthMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateYouthMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYouthMovement[P]>
      : GetScalarType<T[P], AggregateYouthMovement[P]>
  }




  export type YouthMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouthMovementWhereInput
    orderBy?: YouthMovementOrderByWithAggregationInput | YouthMovementOrderByWithAggregationInput[]
    by: YouthMovementScalarFieldEnum[] | YouthMovementScalarFieldEnum
    having?: YouthMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YouthMovementCountAggregateInputType | true
    _avg?: YouthMovementAvgAggregateInputType
    _sum?: YouthMovementSumAggregateInputType
    _min?: YouthMovementMinAggregateInputType
    _max?: YouthMovementMaxAggregateInputType
  }

  export type YouthMovementGroupByOutputType = {
    id: number
    name: string
    description: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt: Date
    updatedAt: Date
    _count: YouthMovementCountAggregateOutputType | null
    _avg: YouthMovementAvgAggregateOutputType | null
    _sum: YouthMovementSumAggregateOutputType | null
    _min: YouthMovementMinAggregateOutputType | null
    _max: YouthMovementMaxAggregateOutputType | null
  }

  type GetYouthMovementGroupByPayload<T extends YouthMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YouthMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YouthMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YouthMovementGroupByOutputType[P]>
            : GetScalarType<T[P], YouthMovementGroupByOutputType[P]>
        }
      >
    >


  export type YouthMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | YouthMovement$groupsArgs<ExtArgs>
    users?: boolean | YouthMovement$usersArgs<ExtArgs>
    invites?: boolean | YouthMovement$invitesArgs<ExtArgs>
    _count?: boolean | YouthMovementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youthMovement"]>

  export type YouthMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["youthMovement"]>

  export type YouthMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["youthMovement"]>

  export type YouthMovementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    city?: boolean
    postalCode?: boolean
    street?: boolean
    houseNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YouthMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "city" | "postalCode" | "street" | "houseNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["youthMovement"]>
  export type YouthMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | YouthMovement$groupsArgs<ExtArgs>
    users?: boolean | YouthMovement$usersArgs<ExtArgs>
    invites?: boolean | YouthMovement$invitesArgs<ExtArgs>
    _count?: boolean | YouthMovementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type YouthMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type YouthMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $YouthMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YouthMovement"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
      users: Prisma.$YouthMovementUserPayload<ExtArgs>[]
      invites: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      city: string
      postalCode: number
      street: string
      houseNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["youthMovement"]>
    composites: {}
  }

  type YouthMovementGetPayload<S extends boolean | null | undefined | YouthMovementDefaultArgs> = $Result.GetResult<Prisma.$YouthMovementPayload, S>

  type YouthMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YouthMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YouthMovementCountAggregateInputType | true
    }

  export interface YouthMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YouthMovement'], meta: { name: 'YouthMovement' } }
    /**
     * Find zero or one YouthMovement that matches the filter.
     * @param {YouthMovementFindUniqueArgs} args - Arguments to find a YouthMovement
     * @example
     * // Get one YouthMovement
     * const youthMovement = await prisma.youthMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YouthMovementFindUniqueArgs>(args: SelectSubset<T, YouthMovementFindUniqueArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one YouthMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YouthMovementFindUniqueOrThrowArgs} args - Arguments to find a YouthMovement
     * @example
     * // Get one YouthMovement
     * const youthMovement = await prisma.youthMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YouthMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, YouthMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first YouthMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementFindFirstArgs} args - Arguments to find a YouthMovement
     * @example
     * // Get one YouthMovement
     * const youthMovement = await prisma.youthMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YouthMovementFindFirstArgs>(args?: SelectSubset<T, YouthMovementFindFirstArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first YouthMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementFindFirstOrThrowArgs} args - Arguments to find a YouthMovement
     * @example
     * // Get one YouthMovement
     * const youthMovement = await prisma.youthMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YouthMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, YouthMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more YouthMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YouthMovements
     * const youthMovements = await prisma.youthMovement.findMany()
     * 
     * // Get first 10 YouthMovements
     * const youthMovements = await prisma.youthMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youthMovementWithIdOnly = await prisma.youthMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YouthMovementFindManyArgs>(args?: SelectSubset<T, YouthMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a YouthMovement.
     * @param {YouthMovementCreateArgs} args - Arguments to create a YouthMovement.
     * @example
     * // Create one YouthMovement
     * const YouthMovement = await prisma.youthMovement.create({
     *   data: {
     *     // ... data to create a YouthMovement
     *   }
     * })
     * 
     */
    create<T extends YouthMovementCreateArgs>(args: SelectSubset<T, YouthMovementCreateArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many YouthMovements.
     * @param {YouthMovementCreateManyArgs} args - Arguments to create many YouthMovements.
     * @example
     * // Create many YouthMovements
     * const youthMovement = await prisma.youthMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YouthMovementCreateManyArgs>(args?: SelectSubset<T, YouthMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YouthMovements and returns the data saved in the database.
     * @param {YouthMovementCreateManyAndReturnArgs} args - Arguments to create many YouthMovements.
     * @example
     * // Create many YouthMovements
     * const youthMovement = await prisma.youthMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YouthMovements and only return the `id`
     * const youthMovementWithIdOnly = await prisma.youthMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YouthMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, YouthMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a YouthMovement.
     * @param {YouthMovementDeleteArgs} args - Arguments to delete one YouthMovement.
     * @example
     * // Delete one YouthMovement
     * const YouthMovement = await prisma.youthMovement.delete({
     *   where: {
     *     // ... filter to delete one YouthMovement
     *   }
     * })
     * 
     */
    delete<T extends YouthMovementDeleteArgs>(args: SelectSubset<T, YouthMovementDeleteArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one YouthMovement.
     * @param {YouthMovementUpdateArgs} args - Arguments to update one YouthMovement.
     * @example
     * // Update one YouthMovement
     * const youthMovement = await prisma.youthMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YouthMovementUpdateArgs>(args: SelectSubset<T, YouthMovementUpdateArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more YouthMovements.
     * @param {YouthMovementDeleteManyArgs} args - Arguments to filter YouthMovements to delete.
     * @example
     * // Delete a few YouthMovements
     * const { count } = await prisma.youthMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YouthMovementDeleteManyArgs>(args?: SelectSubset<T, YouthMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouthMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YouthMovements
     * const youthMovement = await prisma.youthMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YouthMovementUpdateManyArgs>(args: SelectSubset<T, YouthMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouthMovements and returns the data updated in the database.
     * @param {YouthMovementUpdateManyAndReturnArgs} args - Arguments to update many YouthMovements.
     * @example
     * // Update many YouthMovements
     * const youthMovement = await prisma.youthMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YouthMovements and only return the `id`
     * const youthMovementWithIdOnly = await prisma.youthMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YouthMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, YouthMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one YouthMovement.
     * @param {YouthMovementUpsertArgs} args - Arguments to update or create a YouthMovement.
     * @example
     * // Update or create a YouthMovement
     * const youthMovement = await prisma.youthMovement.upsert({
     *   create: {
     *     // ... data to create a YouthMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YouthMovement we want to update
     *   }
     * })
     */
    upsert<T extends YouthMovementUpsertArgs>(args: SelectSubset<T, YouthMovementUpsertArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of YouthMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementCountArgs} args - Arguments to filter YouthMovements to count.
     * @example
     * // Count the number of YouthMovements
     * const count = await prisma.youthMovement.count({
     *   where: {
     *     // ... the filter for the YouthMovements we want to count
     *   }
     * })
    **/
    count<T extends YouthMovementCountArgs>(
      args?: Subset<T, YouthMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YouthMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YouthMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YouthMovementAggregateArgs>(args: Subset<T, YouthMovementAggregateArgs>): Prisma.PrismaPromise<GetYouthMovementAggregateType<T>>

    /**
     * Group by YouthMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YouthMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YouthMovementGroupByArgs['orderBy'] }
        : { orderBy?: YouthMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YouthMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYouthMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YouthMovement model
   */
  readonly fields: YouthMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YouthMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YouthMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends YouthMovement$groupsArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovement$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users<T extends YouthMovement$usersArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovement$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    invites<T extends YouthMovement$invitesArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovement$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the YouthMovement model
   */ 
  interface YouthMovementFieldRefs {
    readonly id: FieldRef<"YouthMovement", 'Int'>
    readonly name: FieldRef<"YouthMovement", 'String'>
    readonly description: FieldRef<"YouthMovement", 'String'>
    readonly city: FieldRef<"YouthMovement", 'String'>
    readonly postalCode: FieldRef<"YouthMovement", 'Int'>
    readonly street: FieldRef<"YouthMovement", 'String'>
    readonly houseNumber: FieldRef<"YouthMovement", 'Int'>
    readonly createdAt: FieldRef<"YouthMovement", 'DateTime'>
    readonly updatedAt: FieldRef<"YouthMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YouthMovement findUnique
   */
  export type YouthMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovement to fetch.
     */
    where: YouthMovementWhereUniqueInput
  }

  /**
   * YouthMovement findUniqueOrThrow
   */
  export type YouthMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovement to fetch.
     */
    where: YouthMovementWhereUniqueInput
  }

  /**
   * YouthMovement findFirst
   */
  export type YouthMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovement to fetch.
     */
    where?: YouthMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovements to fetch.
     */
    orderBy?: YouthMovementOrderByWithRelationInput | YouthMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouthMovements.
     */
    cursor?: YouthMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouthMovements.
     */
    distinct?: YouthMovementScalarFieldEnum | YouthMovementScalarFieldEnum[]
  }

  /**
   * YouthMovement findFirstOrThrow
   */
  export type YouthMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovement to fetch.
     */
    where?: YouthMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovements to fetch.
     */
    orderBy?: YouthMovementOrderByWithRelationInput | YouthMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouthMovements.
     */
    cursor?: YouthMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouthMovements.
     */
    distinct?: YouthMovementScalarFieldEnum | YouthMovementScalarFieldEnum[]
  }

  /**
   * YouthMovement findMany
   */
  export type YouthMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovements to fetch.
     */
    where?: YouthMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovements to fetch.
     */
    orderBy?: YouthMovementOrderByWithRelationInput | YouthMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YouthMovements.
     */
    cursor?: YouthMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovements.
     */
    skip?: number
    distinct?: YouthMovementScalarFieldEnum | YouthMovementScalarFieldEnum[]
  }

  /**
   * YouthMovement create
   */
  export type YouthMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a YouthMovement.
     */
    data: XOR<YouthMovementCreateInput, YouthMovementUncheckedCreateInput>
  }

  /**
   * YouthMovement createMany
   */
  export type YouthMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YouthMovements.
     */
    data: YouthMovementCreateManyInput | YouthMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YouthMovement createManyAndReturn
   */
  export type YouthMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * The data used to create many YouthMovements.
     */
    data: YouthMovementCreateManyInput | YouthMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YouthMovement update
   */
  export type YouthMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a YouthMovement.
     */
    data: XOR<YouthMovementUpdateInput, YouthMovementUncheckedUpdateInput>
    /**
     * Choose, which YouthMovement to update.
     */
    where: YouthMovementWhereUniqueInput
  }

  /**
   * YouthMovement updateMany
   */
  export type YouthMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YouthMovements.
     */
    data: XOR<YouthMovementUpdateManyMutationInput, YouthMovementUncheckedUpdateManyInput>
    /**
     * Filter which YouthMovements to update
     */
    where?: YouthMovementWhereInput
    /**
     * Limit how many YouthMovements to update.
     */
    limit?: number
  }

  /**
   * YouthMovement updateManyAndReturn
   */
  export type YouthMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * The data used to update YouthMovements.
     */
    data: XOR<YouthMovementUpdateManyMutationInput, YouthMovementUncheckedUpdateManyInput>
    /**
     * Filter which YouthMovements to update
     */
    where?: YouthMovementWhereInput
    /**
     * Limit how many YouthMovements to update.
     */
    limit?: number
  }

  /**
   * YouthMovement upsert
   */
  export type YouthMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the YouthMovement to update in case it exists.
     */
    where: YouthMovementWhereUniqueInput
    /**
     * In case the YouthMovement found by the `where` argument doesn't exist, create a new YouthMovement with this data.
     */
    create: XOR<YouthMovementCreateInput, YouthMovementUncheckedCreateInput>
    /**
     * In case the YouthMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YouthMovementUpdateInput, YouthMovementUncheckedUpdateInput>
  }

  /**
   * YouthMovement delete
   */
  export type YouthMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
    /**
     * Filter which YouthMovement to delete.
     */
    where: YouthMovementWhereUniqueInput
  }

  /**
   * YouthMovement deleteMany
   */
  export type YouthMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouthMovements to delete
     */
    where?: YouthMovementWhereInput
    /**
     * Limit how many YouthMovements to delete.
     */
    limit?: number
  }

  /**
   * YouthMovement.groups
   */
  export type YouthMovement$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * YouthMovement.users
   */
  export type YouthMovement$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    where?: YouthMovementUserWhereInput
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    cursor?: YouthMovementUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YouthMovementUserScalarFieldEnum | YouthMovementUserScalarFieldEnum[]
  }

  /**
   * YouthMovement.invites
   */
  export type YouthMovement$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * YouthMovement without action
   */
  export type YouthMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovement
     */
    select?: YouthMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovement
     */
    omit?: YouthMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    cognitoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    cognitoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    cognitoId: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    cognitoId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    cognitoId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    cognitoId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt: Date
    updatedAt: Date
    imageUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    cognitoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    youthMovements?: boolean | User$youthMovementsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    attendees?: boolean | User$attendeesArgs<ExtArgs>
    volunteers?: boolean | User$volunteersArgs<ExtArgs>
    leadersGroups?: boolean | User$leadersGroupsArgs<ExtArgs>
    parentChild?: boolean | User$parentChildArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    cognitoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    cognitoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    cognitoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "cognitoId" | "createdAt" | "updatedAt" | "imageUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovements?: boolean | User$youthMovementsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    attendees?: boolean | User$attendeesArgs<ExtArgs>
    volunteers?: boolean | User$volunteersArgs<ExtArgs>
    leadersGroups?: boolean | User$leadersGroupsArgs<ExtArgs>
    parentChild?: boolean | User$parentChildArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      youthMovements: Prisma.$YouthMovementUserPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      postLikes: Prisma.$PostLikePayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$MessagePayload<ExtArgs>[]
      attendees: Prisma.$AttendeePayload<ExtArgs>[]
      volunteers: Prisma.$VolunteerPayload<ExtArgs>[]
      leadersGroups: Prisma.$LeadersGroupPayload<ExtArgs>[]
      parentChild: Prisma.$ParentChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      cognitoId: string
      createdAt: Date
      updatedAt: Date
      imageUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    youthMovements<T extends User$youthMovementsArgs<ExtArgs> = {}>(args?: Subset<T, User$youthMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    postLikes<T extends User$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    attendees<T extends User$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    volunteers<T extends User$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    leadersGroups<T extends User$leadersGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$leadersGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    parentChild<T extends User$parentChildArgs<ExtArgs> = {}>(args?: Subset<T, User$parentChildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly cognitoId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly imageUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.youthMovements
   */
  export type User$youthMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    where?: YouthMovementUserWhereInput
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    cursor?: YouthMovementUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YouthMovementUserScalarFieldEnum | YouthMovementUserScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.postLikes
   */
  export type User$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.attendees
   */
  export type User$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    cursor?: AttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * User.volunteers
   */
  export type User$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    cursor?: VolunteerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * User.leadersGroups
   */
  export type User$leadersGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    where?: LeadersGroupWhereInput
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    cursor?: LeadersGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadersGroupScalarFieldEnum | LeadersGroupScalarFieldEnum[]
  }

  /**
   * User.parentChild
   */
  export type User$parentChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model YouthMovementUser
   */

  export type AggregateYouthMovementUser = {
    _count: YouthMovementUserCountAggregateOutputType | null
    _avg: YouthMovementUserAvgAggregateOutputType | null
    _sum: YouthMovementUserSumAggregateOutputType | null
    _min: YouthMovementUserMinAggregateOutputType | null
    _max: YouthMovementUserMaxAggregateOutputType | null
  }

  export type YouthMovementUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    youthMovementId: number | null
  }

  export type YouthMovementUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
    youthMovementId: number | null
  }

  export type YouthMovementUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    youthMovementId: number | null
    role: $Enums.Role | null
  }

  export type YouthMovementUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    youthMovementId: number | null
    role: $Enums.Role | null
  }

  export type YouthMovementUserCountAggregateOutputType = {
    id: number
    userId: number
    youthMovementId: number
    role: number
    _all: number
  }


  export type YouthMovementUserAvgAggregateInputType = {
    id?: true
    userId?: true
    youthMovementId?: true
  }

  export type YouthMovementUserSumAggregateInputType = {
    id?: true
    userId?: true
    youthMovementId?: true
  }

  export type YouthMovementUserMinAggregateInputType = {
    id?: true
    userId?: true
    youthMovementId?: true
    role?: true
  }

  export type YouthMovementUserMaxAggregateInputType = {
    id?: true
    userId?: true
    youthMovementId?: true
    role?: true
  }

  export type YouthMovementUserCountAggregateInputType = {
    id?: true
    userId?: true
    youthMovementId?: true
    role?: true
    _all?: true
  }

  export type YouthMovementUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouthMovementUser to aggregate.
     */
    where?: YouthMovementUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovementUsers to fetch.
     */
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YouthMovementUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovementUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovementUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YouthMovementUsers
    **/
    _count?: true | YouthMovementUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YouthMovementUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YouthMovementUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YouthMovementUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YouthMovementUserMaxAggregateInputType
  }

  export type GetYouthMovementUserAggregateType<T extends YouthMovementUserAggregateArgs> = {
        [P in keyof T & keyof AggregateYouthMovementUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYouthMovementUser[P]>
      : GetScalarType<T[P], AggregateYouthMovementUser[P]>
  }




  export type YouthMovementUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YouthMovementUserWhereInput
    orderBy?: YouthMovementUserOrderByWithAggregationInput | YouthMovementUserOrderByWithAggregationInput[]
    by: YouthMovementUserScalarFieldEnum[] | YouthMovementUserScalarFieldEnum
    having?: YouthMovementUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YouthMovementUserCountAggregateInputType | true
    _avg?: YouthMovementUserAvgAggregateInputType
    _sum?: YouthMovementUserSumAggregateInputType
    _min?: YouthMovementUserMinAggregateInputType
    _max?: YouthMovementUserMaxAggregateInputType
  }

  export type YouthMovementUserGroupByOutputType = {
    id: number
    userId: number
    youthMovementId: number
    role: $Enums.Role
    _count: YouthMovementUserCountAggregateOutputType | null
    _avg: YouthMovementUserAvgAggregateOutputType | null
    _sum: YouthMovementUserSumAggregateOutputType | null
    _min: YouthMovementUserMinAggregateOutputType | null
    _max: YouthMovementUserMaxAggregateOutputType | null
  }

  type GetYouthMovementUserGroupByPayload<T extends YouthMovementUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YouthMovementUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YouthMovementUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YouthMovementUserGroupByOutputType[P]>
            : GetScalarType<T[P], YouthMovementUserGroupByOutputType[P]>
        }
      >
    >


  export type YouthMovementUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    youthMovementId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youthMovementUser"]>

  export type YouthMovementUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    youthMovementId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youthMovementUser"]>

  export type YouthMovementUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    youthMovementId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youthMovementUser"]>

  export type YouthMovementUserSelectScalar = {
    id?: boolean
    userId?: boolean
    youthMovementId?: boolean
    role?: boolean
  }

  export type YouthMovementUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "youthMovementId" | "role", ExtArgs["result"]["youthMovementUser"]>
  export type YouthMovementUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }
  export type YouthMovementUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }
  export type YouthMovementUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }

  export type $YouthMovementUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YouthMovementUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      youthMovement: Prisma.$YouthMovementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      youthMovementId: number
      role: $Enums.Role
    }, ExtArgs["result"]["youthMovementUser"]>
    composites: {}
  }

  type YouthMovementUserGetPayload<S extends boolean | null | undefined | YouthMovementUserDefaultArgs> = $Result.GetResult<Prisma.$YouthMovementUserPayload, S>

  type YouthMovementUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YouthMovementUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YouthMovementUserCountAggregateInputType | true
    }

  export interface YouthMovementUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YouthMovementUser'], meta: { name: 'YouthMovementUser' } }
    /**
     * Find zero or one YouthMovementUser that matches the filter.
     * @param {YouthMovementUserFindUniqueArgs} args - Arguments to find a YouthMovementUser
     * @example
     * // Get one YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YouthMovementUserFindUniqueArgs>(args: SelectSubset<T, YouthMovementUserFindUniqueArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one YouthMovementUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YouthMovementUserFindUniqueOrThrowArgs} args - Arguments to find a YouthMovementUser
     * @example
     * // Get one YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YouthMovementUserFindUniqueOrThrowArgs>(args: SelectSubset<T, YouthMovementUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first YouthMovementUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserFindFirstArgs} args - Arguments to find a YouthMovementUser
     * @example
     * // Get one YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YouthMovementUserFindFirstArgs>(args?: SelectSubset<T, YouthMovementUserFindFirstArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first YouthMovementUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserFindFirstOrThrowArgs} args - Arguments to find a YouthMovementUser
     * @example
     * // Get one YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YouthMovementUserFindFirstOrThrowArgs>(args?: SelectSubset<T, YouthMovementUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more YouthMovementUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YouthMovementUsers
     * const youthMovementUsers = await prisma.youthMovementUser.findMany()
     * 
     * // Get first 10 YouthMovementUsers
     * const youthMovementUsers = await prisma.youthMovementUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youthMovementUserWithIdOnly = await prisma.youthMovementUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YouthMovementUserFindManyArgs>(args?: SelectSubset<T, YouthMovementUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a YouthMovementUser.
     * @param {YouthMovementUserCreateArgs} args - Arguments to create a YouthMovementUser.
     * @example
     * // Create one YouthMovementUser
     * const YouthMovementUser = await prisma.youthMovementUser.create({
     *   data: {
     *     // ... data to create a YouthMovementUser
     *   }
     * })
     * 
     */
    create<T extends YouthMovementUserCreateArgs>(args: SelectSubset<T, YouthMovementUserCreateArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many YouthMovementUsers.
     * @param {YouthMovementUserCreateManyArgs} args - Arguments to create many YouthMovementUsers.
     * @example
     * // Create many YouthMovementUsers
     * const youthMovementUser = await prisma.youthMovementUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YouthMovementUserCreateManyArgs>(args?: SelectSubset<T, YouthMovementUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YouthMovementUsers and returns the data saved in the database.
     * @param {YouthMovementUserCreateManyAndReturnArgs} args - Arguments to create many YouthMovementUsers.
     * @example
     * // Create many YouthMovementUsers
     * const youthMovementUser = await prisma.youthMovementUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YouthMovementUsers and only return the `id`
     * const youthMovementUserWithIdOnly = await prisma.youthMovementUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YouthMovementUserCreateManyAndReturnArgs>(args?: SelectSubset<T, YouthMovementUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a YouthMovementUser.
     * @param {YouthMovementUserDeleteArgs} args - Arguments to delete one YouthMovementUser.
     * @example
     * // Delete one YouthMovementUser
     * const YouthMovementUser = await prisma.youthMovementUser.delete({
     *   where: {
     *     // ... filter to delete one YouthMovementUser
     *   }
     * })
     * 
     */
    delete<T extends YouthMovementUserDeleteArgs>(args: SelectSubset<T, YouthMovementUserDeleteArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one YouthMovementUser.
     * @param {YouthMovementUserUpdateArgs} args - Arguments to update one YouthMovementUser.
     * @example
     * // Update one YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YouthMovementUserUpdateArgs>(args: SelectSubset<T, YouthMovementUserUpdateArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more YouthMovementUsers.
     * @param {YouthMovementUserDeleteManyArgs} args - Arguments to filter YouthMovementUsers to delete.
     * @example
     * // Delete a few YouthMovementUsers
     * const { count } = await prisma.youthMovementUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YouthMovementUserDeleteManyArgs>(args?: SelectSubset<T, YouthMovementUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouthMovementUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YouthMovementUsers
     * const youthMovementUser = await prisma.youthMovementUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YouthMovementUserUpdateManyArgs>(args: SelectSubset<T, YouthMovementUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YouthMovementUsers and returns the data updated in the database.
     * @param {YouthMovementUserUpdateManyAndReturnArgs} args - Arguments to update many YouthMovementUsers.
     * @example
     * // Update many YouthMovementUsers
     * const youthMovementUser = await prisma.youthMovementUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YouthMovementUsers and only return the `id`
     * const youthMovementUserWithIdOnly = await prisma.youthMovementUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends YouthMovementUserUpdateManyAndReturnArgs>(args: SelectSubset<T, YouthMovementUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one YouthMovementUser.
     * @param {YouthMovementUserUpsertArgs} args - Arguments to update or create a YouthMovementUser.
     * @example
     * // Update or create a YouthMovementUser
     * const youthMovementUser = await prisma.youthMovementUser.upsert({
     *   create: {
     *     // ... data to create a YouthMovementUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YouthMovementUser we want to update
     *   }
     * })
     */
    upsert<T extends YouthMovementUserUpsertArgs>(args: SelectSubset<T, YouthMovementUserUpsertArgs<ExtArgs>>): Prisma__YouthMovementUserClient<$Result.GetResult<Prisma.$YouthMovementUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of YouthMovementUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserCountArgs} args - Arguments to filter YouthMovementUsers to count.
     * @example
     * // Count the number of YouthMovementUsers
     * const count = await prisma.youthMovementUser.count({
     *   where: {
     *     // ... the filter for the YouthMovementUsers we want to count
     *   }
     * })
    **/
    count<T extends YouthMovementUserCountArgs>(
      args?: Subset<T, YouthMovementUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YouthMovementUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YouthMovementUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YouthMovementUserAggregateArgs>(args: Subset<T, YouthMovementUserAggregateArgs>): Prisma.PrismaPromise<GetYouthMovementUserAggregateType<T>>

    /**
     * Group by YouthMovementUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YouthMovementUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YouthMovementUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YouthMovementUserGroupByArgs['orderBy'] }
        : { orderBy?: YouthMovementUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YouthMovementUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYouthMovementUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YouthMovementUser model
   */
  readonly fields: YouthMovementUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YouthMovementUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YouthMovementUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    youthMovement<T extends YouthMovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovementDefaultArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the YouthMovementUser model
   */ 
  interface YouthMovementUserFieldRefs {
    readonly id: FieldRef<"YouthMovementUser", 'Int'>
    readonly userId: FieldRef<"YouthMovementUser", 'Int'>
    readonly youthMovementId: FieldRef<"YouthMovementUser", 'Int'>
    readonly role: FieldRef<"YouthMovementUser", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * YouthMovementUser findUnique
   */
  export type YouthMovementUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovementUser to fetch.
     */
    where: YouthMovementUserWhereUniqueInput
  }

  /**
   * YouthMovementUser findUniqueOrThrow
   */
  export type YouthMovementUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovementUser to fetch.
     */
    where: YouthMovementUserWhereUniqueInput
  }

  /**
   * YouthMovementUser findFirst
   */
  export type YouthMovementUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovementUser to fetch.
     */
    where?: YouthMovementUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovementUsers to fetch.
     */
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouthMovementUsers.
     */
    cursor?: YouthMovementUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovementUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovementUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouthMovementUsers.
     */
    distinct?: YouthMovementUserScalarFieldEnum | YouthMovementUserScalarFieldEnum[]
  }

  /**
   * YouthMovementUser findFirstOrThrow
   */
  export type YouthMovementUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovementUser to fetch.
     */
    where?: YouthMovementUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovementUsers to fetch.
     */
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YouthMovementUsers.
     */
    cursor?: YouthMovementUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovementUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovementUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YouthMovementUsers.
     */
    distinct?: YouthMovementUserScalarFieldEnum | YouthMovementUserScalarFieldEnum[]
  }

  /**
   * YouthMovementUser findMany
   */
  export type YouthMovementUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter, which YouthMovementUsers to fetch.
     */
    where?: YouthMovementUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YouthMovementUsers to fetch.
     */
    orderBy?: YouthMovementUserOrderByWithRelationInput | YouthMovementUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YouthMovementUsers.
     */
    cursor?: YouthMovementUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YouthMovementUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YouthMovementUsers.
     */
    skip?: number
    distinct?: YouthMovementUserScalarFieldEnum | YouthMovementUserScalarFieldEnum[]
  }

  /**
   * YouthMovementUser create
   */
  export type YouthMovementUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * The data needed to create a YouthMovementUser.
     */
    data: XOR<YouthMovementUserCreateInput, YouthMovementUserUncheckedCreateInput>
  }

  /**
   * YouthMovementUser createMany
   */
  export type YouthMovementUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YouthMovementUsers.
     */
    data: YouthMovementUserCreateManyInput | YouthMovementUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YouthMovementUser createManyAndReturn
   */
  export type YouthMovementUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * The data used to create many YouthMovementUsers.
     */
    data: YouthMovementUserCreateManyInput | YouthMovementUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YouthMovementUser update
   */
  export type YouthMovementUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * The data needed to update a YouthMovementUser.
     */
    data: XOR<YouthMovementUserUpdateInput, YouthMovementUserUncheckedUpdateInput>
    /**
     * Choose, which YouthMovementUser to update.
     */
    where: YouthMovementUserWhereUniqueInput
  }

  /**
   * YouthMovementUser updateMany
   */
  export type YouthMovementUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YouthMovementUsers.
     */
    data: XOR<YouthMovementUserUpdateManyMutationInput, YouthMovementUserUncheckedUpdateManyInput>
    /**
     * Filter which YouthMovementUsers to update
     */
    where?: YouthMovementUserWhereInput
    /**
     * Limit how many YouthMovementUsers to update.
     */
    limit?: number
  }

  /**
   * YouthMovementUser updateManyAndReturn
   */
  export type YouthMovementUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * The data used to update YouthMovementUsers.
     */
    data: XOR<YouthMovementUserUpdateManyMutationInput, YouthMovementUserUncheckedUpdateManyInput>
    /**
     * Filter which YouthMovementUsers to update
     */
    where?: YouthMovementUserWhereInput
    /**
     * Limit how many YouthMovementUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * YouthMovementUser upsert
   */
  export type YouthMovementUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * The filter to search for the YouthMovementUser to update in case it exists.
     */
    where: YouthMovementUserWhereUniqueInput
    /**
     * In case the YouthMovementUser found by the `where` argument doesn't exist, create a new YouthMovementUser with this data.
     */
    create: XOR<YouthMovementUserCreateInput, YouthMovementUserUncheckedCreateInput>
    /**
     * In case the YouthMovementUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YouthMovementUserUpdateInput, YouthMovementUserUncheckedUpdateInput>
  }

  /**
   * YouthMovementUser delete
   */
  export type YouthMovementUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
    /**
     * Filter which YouthMovementUser to delete.
     */
    where: YouthMovementUserWhereUniqueInput
  }

  /**
   * YouthMovementUser deleteMany
   */
  export type YouthMovementUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YouthMovementUsers to delete
     */
    where?: YouthMovementUserWhereInput
    /**
     * Limit how many YouthMovementUsers to delete.
     */
    limit?: number
  }

  /**
   * YouthMovementUser without action
   */
  export type YouthMovementUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YouthMovementUser
     */
    select?: YouthMovementUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YouthMovementUser
     */
    omit?: YouthMovementUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YouthMovementUserInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    id: number | null
    youthMovementId: number | null
  }

  export type InvitationSumAggregateOutputType = {
    id: number | null
    youthMovementId: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: number | null
    email: string | null
    role: $Enums.Role | null
    youthMovementId: number | null
    code: string | null
    used: boolean | null
    sentAt: Date | null
    expiresAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: number | null
    email: string | null
    role: $Enums.Role | null
    youthMovementId: number | null
    code: string | null
    used: boolean | null
    sentAt: Date | null
    expiresAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    role: number
    youthMovementId: number
    code: number
    used: number
    sentAt: number
    expiresAt: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    id?: true
    youthMovementId?: true
  }

  export type InvitationSumAggregateInputType = {
    id?: true
    youthMovementId?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    youthMovementId?: true
    code?: true
    used?: true
    sentAt?: true
    expiresAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    youthMovementId?: true
    code?: true
    used?: true
    sentAt?: true
    expiresAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    youthMovementId?: true
    code?: true
    used?: true
    sentAt?: true
    expiresAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: number
    email: string
    role: $Enums.Role
    youthMovementId: number
    code: string
    used: boolean
    sentAt: Date
    expiresAt: Date | null
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    youthMovementId?: boolean
    code?: boolean
    used?: boolean
    sentAt?: boolean
    expiresAt?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    youthMovementId?: boolean
    code?: boolean
    used?: boolean
    sentAt?: boolean
    expiresAt?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    youthMovementId?: boolean
    code?: boolean
    used?: boolean
    sentAt?: boolean
    expiresAt?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    youthMovementId?: boolean
    code?: boolean
    used?: boolean
    sentAt?: boolean
    expiresAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "youthMovementId" | "code" | "used" | "sentAt" | "expiresAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      youthMovement: Prisma.$YouthMovementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      role: $Enums.Role
      youthMovementId: number
      code: string
      used: boolean
      sentAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    youthMovement<T extends YouthMovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovementDefaultArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */ 
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'Int'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly role: FieldRef<"Invitation", 'Role'>
    readonly youthMovementId: FieldRef<"Invitation", 'Int'>
    readonly code: FieldRef<"Invitation", 'String'>
    readonly used: FieldRef<"Invitation", 'Boolean'>
    readonly sentAt: FieldRef<"Invitation", 'DateTime'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    minimumAge: number | null
    maximumAge: number | null
    youthMovementId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    minimumAge: number | null
    maximumAge: number | null
    youthMovementId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    minimumAge: number | null
    maximumAge: number | null
    youthMovementId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    minimumAge: number | null
    maximumAge: number | null
    youthMovementId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    minimumAge?: true
    maximumAge?: true
    youthMovementId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    minimumAge?: true
    maximumAge?: true
    youthMovementId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    minimumAge?: true
    maximumAge?: true
    youthMovementId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    minimumAge?: true
    maximumAge?: true
    youthMovementId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    minimumAge?: true
    maximumAge?: true
    youthMovementId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minimumAge?: boolean
    maximumAge?: boolean
    youthMovementId?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
    posts?: boolean | Group$postsArgs<ExtArgs>
    events?: boolean | Group$eventsArgs<ExtArgs>
    leadersGroups?: boolean | Group$leadersGroupsArgs<ExtArgs>
    parentChild?: boolean | Group$parentChildArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minimumAge?: boolean
    maximumAge?: boolean
    youthMovementId?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minimumAge?: boolean
    maximumAge?: boolean
    youthMovementId?: boolean
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    minimumAge?: boolean
    maximumAge?: boolean
    youthMovementId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "minimumAge" | "maximumAge" | "youthMovementId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
    posts?: boolean | Group$postsArgs<ExtArgs>
    events?: boolean | Group$eventsArgs<ExtArgs>
    leadersGroups?: boolean | Group$leadersGroupsArgs<ExtArgs>
    parentChild?: boolean | Group$parentChildArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    youthMovement?: boolean | YouthMovementDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      youthMovement: Prisma.$YouthMovementPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      leadersGroups: Prisma.$LeadersGroupPayload<ExtArgs>[]
      parentChild: Prisma.$ParentChildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      minimumAge: number
      maximumAge: number
      youthMovementId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    youthMovement<T extends YouthMovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YouthMovementDefaultArgs<ExtArgs>>): Prisma__YouthMovementClient<$Result.GetResult<Prisma.$YouthMovementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    posts<T extends Group$postsArgs<ExtArgs> = {}>(args?: Subset<T, Group$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    events<T extends Group$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Group$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    leadersGroups<T extends Group$leadersGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Group$leadersGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    parentChild<T extends Group$parentChildArgs<ExtArgs> = {}>(args?: Subset<T, Group$parentChildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly name: FieldRef<"Group", 'String'>
    readonly minimumAge: FieldRef<"Group", 'Int'>
    readonly maximumAge: FieldRef<"Group", 'Int'>
    readonly youthMovementId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.posts
   */
  export type Group$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Group.events
   */
  export type Group$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Group.leadersGroups
   */
  export type Group$leadersGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    where?: LeadersGroupWhereInput
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    cursor?: LeadersGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadersGroupScalarFieldEnum | LeadersGroupScalarFieldEnum[]
  }

  /**
   * Group.parentChild
   */
  export type Group$parentChildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    cursor?: ParentChildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    amountOfComments: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    amountOfComments: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    userId: number | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    amountOfComments: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    userId: number | null
    groupId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
    amountOfComments: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    body: number
    userId: number
    groupId: number
    createdAt: number
    updatedAt: number
    image: number
    amountOfComments: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    amountOfComments?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    amountOfComments?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    amountOfComments?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    amountOfComments?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    amountOfComments?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    body: string
    userId: number
    groupId: number | null
    createdAt: Date
    updatedAt: Date
    image: string | null
    amountOfComments: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    amountOfComments?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    amountOfComments?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    amountOfComments?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    amountOfComments?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "userId" | "groupId" | "createdAt" | "updatedAt" | "image" | "amountOfComments", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | Post$groupArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
      likes: Prisma.$PostLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      userId: number
      groupId: number | null
      createdAt: Date
      updatedAt: Date
      image: string | null
      amountOfComments: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    group<T extends Post$groupArgs<ExtArgs> = {}>(args?: Subset<T, Post$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly groupId: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly image: FieldRef<"Post", 'String'>
    readonly amountOfComments: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.group
   */
  export type Post$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostLike
   */

  export type AggregatePostLike = {
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  export type PostLikeAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostLikeSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostLikeMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostLikeMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type PostLikeCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostLikeAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostLikeSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostLikeMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLike to aggregate.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikeMaxAggregateInputType
  }

  export type GetPostLikeAggregateType<T extends PostLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLike[P]>
      : GetScalarType<T[P], AggregatePostLike[P]>
  }




  export type PostLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithAggregationInput | PostLikeOrderByWithAggregationInput[]
    by: PostLikeScalarFieldEnum[] | PostLikeScalarFieldEnum
    having?: PostLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikeCountAggregateInputType | true
    _avg?: PostLikeAvgAggregateInputType
    _sum?: PostLikeSumAggregateInputType
    _min?: PostLikeMinAggregateInputType
    _max?: PostLikeMaxAggregateInputType
  }

  export type PostLikeGroupByOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: Date
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  type GetPostLikeGroupByPayload<T extends PostLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
        }
      >
    >


  export type PostLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["postLike"]>
  export type PostLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLike"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["postLike"]>
    composites: {}
  }

  type PostLikeGetPayload<S extends boolean | null | undefined | PostLikeDefaultArgs> = $Result.GetResult<Prisma.$PostLikePayload, S>

  type PostLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikeCountAggregateInputType | true
    }

  export interface PostLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLike'], meta: { name: 'PostLike' } }
    /**
     * Find zero or one PostLike that matches the filter.
     * @param {PostLikeFindUniqueArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikeFindUniqueArgs>(args: SelectSubset<T, PostLikeFindUniqueArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PostLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikeFindUniqueOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PostLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikeFindFirstArgs>(args?: SelectSubset<T, PostLikeFindFirstArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PostLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLike.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikeWithIdOnly = await prisma.postLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikeFindManyArgs>(args?: SelectSubset<T, PostLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PostLike.
     * @param {PostLikeCreateArgs} args - Arguments to create a PostLike.
     * @example
     * // Create one PostLike
     * const PostLike = await prisma.postLike.create({
     *   data: {
     *     // ... data to create a PostLike
     *   }
     * })
     * 
     */
    create<T extends PostLikeCreateArgs>(args: SelectSubset<T, PostLikeCreateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikeCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikeCreateManyArgs>(args?: SelectSubset<T, PostLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikeCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PostLike.
     * @param {PostLikeDeleteArgs} args - Arguments to delete one PostLike.
     * @example
     * // Delete one PostLike
     * const PostLike = await prisma.postLike.delete({
     *   where: {
     *     // ... filter to delete one PostLike
     *   }
     * })
     * 
     */
    delete<T extends PostLikeDeleteArgs>(args: SelectSubset<T, PostLikeDeleteArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PostLike.
     * @param {PostLikeUpdateArgs} args - Arguments to update one PostLike.
     * @example
     * // Update one PostLike
     * const postLike = await prisma.postLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikeUpdateArgs>(args: SelectSubset<T, PostLikeUpdateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikeDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikeDeleteManyArgs>(args?: SelectSubset<T, PostLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikeUpdateManyArgs>(args: SelectSubset<T, PostLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikeUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PostLike.
     * @param {PostLikeUpsertArgs} args - Arguments to update or create a PostLike.
     * @example
     * // Update or create a PostLike
     * const postLike = await prisma.postLike.upsert({
     *   create: {
     *     // ... data to create a PostLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLike we want to update
     *   }
     * })
     */
    upsert<T extends PostLikeUpsertArgs>(args: SelectSubset<T, PostLikeUpsertArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLike.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikeCountArgs>(
      args?: Subset<T, PostLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikeAggregateArgs>(args: Subset<T, PostLikeAggregateArgs>): Prisma.PrismaPromise<GetPostLikeAggregateType<T>>

    /**
     * Group by PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikeGroupByArgs['orderBy'] }
        : { orderBy?: PostLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLike model
   */
  readonly fields: PostLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLike model
   */ 
  interface PostLikeFieldRefs {
    readonly id: FieldRef<"PostLike", 'Int'>
    readonly postId: FieldRef<"PostLike", 'Int'>
    readonly userId: FieldRef<"PostLike", 'Int'>
    readonly createdAt: FieldRef<"PostLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLike findUnique
   */
  export type PostLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findUniqueOrThrow
   */
  export type PostLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findFirst
   */
  export type PostLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findFirstOrThrow
   */
  export type PostLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findMany
   */
  export type PostLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike create
   */
  export type PostLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLike.
     */
    data: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
  }

  /**
   * PostLike createMany
   */
  export type PostLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLike createManyAndReturn
   */
  export type PostLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike update
   */
  export type PostLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLike.
     */
    data: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
    /**
     * Choose, which PostLike to update.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike updateMany
   */
  export type PostLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLike updateManyAndReturn
   */
  export type PostLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike upsert
   */
  export type PostLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLike to update in case it exists.
     */
    where: PostLikeWhereUniqueInput
    /**
     * In case the PostLike found by the `where` argument doesn't exist, create a new PostLike with this data.
     */
    create: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
    /**
     * In case the PostLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
  }

  /**
   * PostLike delete
   */
  export type PostLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter which PostLike to delete.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike deleteMany
   */
  export type PostLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLike without action
   */
  export type PostLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    body: string | null
    image: string | null
    type: string | null
    eventDate: Date | null
    location: string | null
    signUp: boolean | null
    volunteer: boolean | null
    groupId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    body: string | null
    image: string | null
    type: string | null
    eventDate: Date | null
    location: string | null
    signUp: boolean | null
    volunteer: boolean | null
    groupId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    body: number
    image: number
    type: number
    eventDate: number
    location: number
    signUp: number
    volunteer: number
    groupId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    body?: true
    image?: true
    type?: true
    eventDate?: true
    location?: true
    signUp?: true
    volunteer?: true
    groupId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    body?: true
    image?: true
    type?: true
    eventDate?: true
    location?: true
    signUp?: true
    volunteer?: true
    groupId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    body?: true
    image?: true
    type?: true
    eventDate?: true
    location?: true
    signUp?: true
    volunteer?: true
    groupId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    name: string
    body: string
    image: string | null
    type: string
    eventDate: Date
    location: string | null
    signUp: boolean
    volunteer: boolean
    groupId: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    body?: boolean
    image?: boolean
    type?: boolean
    eventDate?: boolean
    location?: boolean
    signUp?: boolean
    volunteer?: boolean
    groupId?: boolean
    group?: boolean | Event$groupArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    volunteers?: boolean | Event$volunteersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    body?: boolean
    image?: boolean
    type?: boolean
    eventDate?: boolean
    location?: boolean
    signUp?: boolean
    volunteer?: boolean
    groupId?: boolean
    group?: boolean | Event$groupArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    body?: boolean
    image?: boolean
    type?: boolean
    eventDate?: boolean
    location?: boolean
    signUp?: boolean
    volunteer?: boolean
    groupId?: boolean
    group?: boolean | Event$groupArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    body?: boolean
    image?: boolean
    type?: boolean
    eventDate?: boolean
    location?: boolean
    signUp?: boolean
    volunteer?: boolean
    groupId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "body" | "image" | "type" | "eventDate" | "location" | "signUp" | "volunteer" | "groupId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Event$groupArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    volunteers?: boolean | Event$volunteersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Event$groupArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Event$groupArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
      attendees: Prisma.$AttendeePayload<ExtArgs>[]
      volunteers: Prisma.$VolunteerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      body: string
      image: string | null
      type: string
      eventDate: Date
      location: string | null
      signUp: boolean
      volunteer: boolean
      groupId: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends Event$groupArgs<ExtArgs> = {}>(args?: Subset<T, Event$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    volunteers<T extends Event$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, Event$volunteersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly body: FieldRef<"Event", 'String'>
    readonly image: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly signUp: FieldRef<"Event", 'Boolean'>
    readonly volunteer: FieldRef<"Event", 'Boolean'>
    readonly groupId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.group
   */
  export type Event$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    cursor?: AttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Event.volunteers
   */
  export type Event$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    cursor?: VolunteerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Attendee
   */

  export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null
    _avg: AttendeeAvgAggregateOutputType | null
    _sum: AttendeeSumAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  export type AttendeeAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type AttendeeSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type AttendeeMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    _all: number
  }


  export type AttendeeAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type AttendeeSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type AttendeeMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendee to aggregate.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeeMaxAggregateInputType
  }

  export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendee[P]>
      : GetScalarType<T[P], AggregateAttendee[P]>
  }




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithAggregationInput | AttendeeOrderByWithAggregationInput[]
    by: AttendeeScalarFieldEnum[] | AttendeeScalarFieldEnum
    having?: AttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeeCountAggregateInputType | true
    _avg?: AttendeeAvgAggregateInputType
    _sum?: AttendeeSumAggregateInputType
    _min?: AttendeeMinAggregateInputType
    _max?: AttendeeMaxAggregateInputType
  }

  export type AttendeeGroupByOutputType = {
    id: number
    eventId: number
    userId: number
    _count: AttendeeCountAggregateOutputType | null
    _avg: AttendeeAvgAggregateOutputType | null
    _sum: AttendeeSumAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
        }
      >
    >


  export type AttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type AttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId", ExtArgs["result"]["attendee"]>
  export type AttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      userId: number
    }, ExtArgs["result"]["attendee"]>
    composites: {}
  }

  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendee'], meta: { name: 'Attendee' } }
    /**
     * Find zero or one Attendee that matches the filter.
     * @param {AttendeeFindUniqueArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeeFindUniqueArgs>(args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Attendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Attendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeeFindFirstArgs>(args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Attendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendee.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeeWithIdOnly = await prisma.attendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeeFindManyArgs>(args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Attendee.
     * @param {AttendeeCreateArgs} args - Arguments to create a Attendee.
     * @example
     * // Create one Attendee
     * const Attendee = await prisma.attendee.create({
     *   data: {
     *     // ... data to create a Attendee
     *   }
     * })
     * 
     */
    create<T extends AttendeeCreateArgs>(args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Attendees.
     * @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeeCreateManyArgs>(args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendees and returns the data saved in the database.
     * @param {AttendeeCreateManyAndReturnArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Attendee.
     * @param {AttendeeDeleteArgs} args - Arguments to delete one Attendee.
     * @example
     * // Delete one Attendee
     * const Attendee = await prisma.attendee.delete({
     *   where: {
     *     // ... filter to delete one Attendee
     *   }
     * })
     * 
     */
    delete<T extends AttendeeDeleteArgs>(args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Attendee.
     * @param {AttendeeUpdateArgs} args - Arguments to update one Attendee.
     * @example
     * // Update one Attendee
     * const attendee = await prisma.attendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeeUpdateArgs>(args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeeDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeeUpdateManyArgs>(args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees and returns the data updated in the database.
     * @param {AttendeeUpdateManyAndReturnArgs} args - Arguments to update many Attendees.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Attendee.
     * @param {AttendeeUpsertArgs} args - Arguments to update or create a Attendee.
     * @example
     * // Update or create a Attendee
     * const attendee = await prisma.attendee.upsert({
     *   create: {
     *     // ... data to create a Attendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendee we want to update
     *   }
     * })
     */
    upsert<T extends AttendeeUpsertArgs>(args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendee.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeeCountArgs>(
      args?: Subset<T, AttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendeeAggregateArgs>(args: Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>

    /**
     * Group by Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeeGroupByArgs['orderBy'] }
        : { orderBy?: AttendeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendee model
   */
  readonly fields: AttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendee model
   */ 
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'Int'>
    readonly eventId: FieldRef<"Attendee", 'Int'>
    readonly userId: FieldRef<"Attendee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findUniqueOrThrow
   */
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findFirst
   */
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findFirstOrThrow
   */
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findMany
   */
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee create
   */
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendee.
     */
    data: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
  }

  /**
   * Attendee createMany
   */
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee createManyAndReturn
   */
  export type AttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendee.
     */
    data: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
    /**
     * Choose, which Attendee to update.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee updateMany
   */
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee updateManyAndReturn
   */
  export type AttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendee to update in case it exists.
     */
    where: AttendeeWhereUniqueInput
    /**
     * In case the Attendee found by the `where` argument doesn't exist, create a new Attendee with this data.
     */
    create: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
    /**
     * In case the Attendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
  }

  /**
   * Attendee delete
   */
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter which Attendee to delete.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee deleteMany
   */
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: number
    eventId: number
    userId: number
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      userId: number
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {VolunteerCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {VolunteerUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volunteer model
   */ 
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'Int'>
    readonly eventId: FieldRef<"Volunteer", 'Int'>
    readonly userId: FieldRef<"Volunteer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer createManyAndReturn
   */
  export type VolunteerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer updateManyAndReturn
   */
  export type VolunteerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model LeadersGroup
   */

  export type AggregateLeadersGroup = {
    _count: LeadersGroupCountAggregateOutputType | null
    _avg: LeadersGroupAvgAggregateOutputType | null
    _sum: LeadersGroupSumAggregateOutputType | null
    _min: LeadersGroupMinAggregateOutputType | null
    _max: LeadersGroupMaxAggregateOutputType | null
  }

  export type LeadersGroupAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type LeadersGroupSumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type LeadersGroupMinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type LeadersGroupMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type LeadersGroupCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    _all: number
  }


  export type LeadersGroupAvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type LeadersGroupSumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type LeadersGroupMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type LeadersGroupMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type LeadersGroupCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    _all?: true
  }

  export type LeadersGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadersGroup to aggregate.
     */
    where?: LeadersGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadersGroups to fetch.
     */
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadersGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadersGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadersGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadersGroups
    **/
    _count?: true | LeadersGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadersGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadersGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadersGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadersGroupMaxAggregateInputType
  }

  export type GetLeadersGroupAggregateType<T extends LeadersGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadersGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadersGroup[P]>
      : GetScalarType<T[P], AggregateLeadersGroup[P]>
  }




  export type LeadersGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadersGroupWhereInput
    orderBy?: LeadersGroupOrderByWithAggregationInput | LeadersGroupOrderByWithAggregationInput[]
    by: LeadersGroupScalarFieldEnum[] | LeadersGroupScalarFieldEnum
    having?: LeadersGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadersGroupCountAggregateInputType | true
    _avg?: LeadersGroupAvgAggregateInputType
    _sum?: LeadersGroupSumAggregateInputType
    _min?: LeadersGroupMinAggregateInputType
    _max?: LeadersGroupMaxAggregateInputType
  }

  export type LeadersGroupGroupByOutputType = {
    id: number
    userId: number
    groupId: number
    _count: LeadersGroupCountAggregateOutputType | null
    _avg: LeadersGroupAvgAggregateOutputType | null
    _sum: LeadersGroupSumAggregateOutputType | null
    _min: LeadersGroupMinAggregateOutputType | null
    _max: LeadersGroupMaxAggregateOutputType | null
  }

  type GetLeadersGroupGroupByPayload<T extends LeadersGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadersGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadersGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadersGroupGroupByOutputType[P]>
            : GetScalarType<T[P], LeadersGroupGroupByOutputType[P]>
        }
      >
    >


  export type LeadersGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadersGroup"]>

  export type LeadersGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadersGroup"]>

  export type LeadersGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadersGroup"]>

  export type LeadersGroupSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
  }

  export type LeadersGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId", ExtArgs["result"]["leadersGroup"]>
  export type LeadersGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type LeadersGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type LeadersGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $LeadersGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadersGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      groupId: number
    }, ExtArgs["result"]["leadersGroup"]>
    composites: {}
  }

  type LeadersGroupGetPayload<S extends boolean | null | undefined | LeadersGroupDefaultArgs> = $Result.GetResult<Prisma.$LeadersGroupPayload, S>

  type LeadersGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadersGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadersGroupCountAggregateInputType | true
    }

  export interface LeadersGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadersGroup'], meta: { name: 'LeadersGroup' } }
    /**
     * Find zero or one LeadersGroup that matches the filter.
     * @param {LeadersGroupFindUniqueArgs} args - Arguments to find a LeadersGroup
     * @example
     * // Get one LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadersGroupFindUniqueArgs>(args: SelectSubset<T, LeadersGroupFindUniqueArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LeadersGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadersGroupFindUniqueOrThrowArgs} args - Arguments to find a LeadersGroup
     * @example
     * // Get one LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadersGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadersGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LeadersGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupFindFirstArgs} args - Arguments to find a LeadersGroup
     * @example
     * // Get one LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadersGroupFindFirstArgs>(args?: SelectSubset<T, LeadersGroupFindFirstArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LeadersGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupFindFirstOrThrowArgs} args - Arguments to find a LeadersGroup
     * @example
     * // Get one LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadersGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadersGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LeadersGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadersGroups
     * const leadersGroups = await prisma.leadersGroup.findMany()
     * 
     * // Get first 10 LeadersGroups
     * const leadersGroups = await prisma.leadersGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadersGroupWithIdOnly = await prisma.leadersGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadersGroupFindManyArgs>(args?: SelectSubset<T, LeadersGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LeadersGroup.
     * @param {LeadersGroupCreateArgs} args - Arguments to create a LeadersGroup.
     * @example
     * // Create one LeadersGroup
     * const LeadersGroup = await prisma.leadersGroup.create({
     *   data: {
     *     // ... data to create a LeadersGroup
     *   }
     * })
     * 
     */
    create<T extends LeadersGroupCreateArgs>(args: SelectSubset<T, LeadersGroupCreateArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LeadersGroups.
     * @param {LeadersGroupCreateManyArgs} args - Arguments to create many LeadersGroups.
     * @example
     * // Create many LeadersGroups
     * const leadersGroup = await prisma.leadersGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadersGroupCreateManyArgs>(args?: SelectSubset<T, LeadersGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadersGroups and returns the data saved in the database.
     * @param {LeadersGroupCreateManyAndReturnArgs} args - Arguments to create many LeadersGroups.
     * @example
     * // Create many LeadersGroups
     * const leadersGroup = await prisma.leadersGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadersGroups and only return the `id`
     * const leadersGroupWithIdOnly = await prisma.leadersGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadersGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadersGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a LeadersGroup.
     * @param {LeadersGroupDeleteArgs} args - Arguments to delete one LeadersGroup.
     * @example
     * // Delete one LeadersGroup
     * const LeadersGroup = await prisma.leadersGroup.delete({
     *   where: {
     *     // ... filter to delete one LeadersGroup
     *   }
     * })
     * 
     */
    delete<T extends LeadersGroupDeleteArgs>(args: SelectSubset<T, LeadersGroupDeleteArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LeadersGroup.
     * @param {LeadersGroupUpdateArgs} args - Arguments to update one LeadersGroup.
     * @example
     * // Update one LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadersGroupUpdateArgs>(args: SelectSubset<T, LeadersGroupUpdateArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LeadersGroups.
     * @param {LeadersGroupDeleteManyArgs} args - Arguments to filter LeadersGroups to delete.
     * @example
     * // Delete a few LeadersGroups
     * const { count } = await prisma.leadersGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadersGroupDeleteManyArgs>(args?: SelectSubset<T, LeadersGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadersGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadersGroups
     * const leadersGroup = await prisma.leadersGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadersGroupUpdateManyArgs>(args: SelectSubset<T, LeadersGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadersGroups and returns the data updated in the database.
     * @param {LeadersGroupUpdateManyAndReturnArgs} args - Arguments to update many LeadersGroups.
     * @example
     * // Update many LeadersGroups
     * const leadersGroup = await prisma.leadersGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadersGroups and only return the `id`
     * const leadersGroupWithIdOnly = await prisma.leadersGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadersGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadersGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one LeadersGroup.
     * @param {LeadersGroupUpsertArgs} args - Arguments to update or create a LeadersGroup.
     * @example
     * // Update or create a LeadersGroup
     * const leadersGroup = await prisma.leadersGroup.upsert({
     *   create: {
     *     // ... data to create a LeadersGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadersGroup we want to update
     *   }
     * })
     */
    upsert<T extends LeadersGroupUpsertArgs>(args: SelectSubset<T, LeadersGroupUpsertArgs<ExtArgs>>): Prisma__LeadersGroupClient<$Result.GetResult<Prisma.$LeadersGroupPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LeadersGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupCountArgs} args - Arguments to filter LeadersGroups to count.
     * @example
     * // Count the number of LeadersGroups
     * const count = await prisma.leadersGroup.count({
     *   where: {
     *     // ... the filter for the LeadersGroups we want to count
     *   }
     * })
    **/
    count<T extends LeadersGroupCountArgs>(
      args?: Subset<T, LeadersGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadersGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadersGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadersGroupAggregateArgs>(args: Subset<T, LeadersGroupAggregateArgs>): Prisma.PrismaPromise<GetLeadersGroupAggregateType<T>>

    /**
     * Group by LeadersGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadersGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadersGroupGroupByArgs['orderBy'] }
        : { orderBy?: LeadersGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadersGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadersGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadersGroup model
   */
  readonly fields: LeadersGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadersGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadersGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadersGroup model
   */ 
  interface LeadersGroupFieldRefs {
    readonly id: FieldRef<"LeadersGroup", 'Int'>
    readonly userId: FieldRef<"LeadersGroup", 'Int'>
    readonly groupId: FieldRef<"LeadersGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LeadersGroup findUnique
   */
  export type LeadersGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter, which LeadersGroup to fetch.
     */
    where: LeadersGroupWhereUniqueInput
  }

  /**
   * LeadersGroup findUniqueOrThrow
   */
  export type LeadersGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter, which LeadersGroup to fetch.
     */
    where: LeadersGroupWhereUniqueInput
  }

  /**
   * LeadersGroup findFirst
   */
  export type LeadersGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter, which LeadersGroup to fetch.
     */
    where?: LeadersGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadersGroups to fetch.
     */
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadersGroups.
     */
    cursor?: LeadersGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadersGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadersGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadersGroups.
     */
    distinct?: LeadersGroupScalarFieldEnum | LeadersGroupScalarFieldEnum[]
  }

  /**
   * LeadersGroup findFirstOrThrow
   */
  export type LeadersGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter, which LeadersGroup to fetch.
     */
    where?: LeadersGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadersGroups to fetch.
     */
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadersGroups.
     */
    cursor?: LeadersGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadersGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadersGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadersGroups.
     */
    distinct?: LeadersGroupScalarFieldEnum | LeadersGroupScalarFieldEnum[]
  }

  /**
   * LeadersGroup findMany
   */
  export type LeadersGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter, which LeadersGroups to fetch.
     */
    where?: LeadersGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadersGroups to fetch.
     */
    orderBy?: LeadersGroupOrderByWithRelationInput | LeadersGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadersGroups.
     */
    cursor?: LeadersGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadersGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadersGroups.
     */
    skip?: number
    distinct?: LeadersGroupScalarFieldEnum | LeadersGroupScalarFieldEnum[]
  }

  /**
   * LeadersGroup create
   */
  export type LeadersGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadersGroup.
     */
    data: XOR<LeadersGroupCreateInput, LeadersGroupUncheckedCreateInput>
  }

  /**
   * LeadersGroup createMany
   */
  export type LeadersGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadersGroups.
     */
    data: LeadersGroupCreateManyInput | LeadersGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadersGroup createManyAndReturn
   */
  export type LeadersGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * The data used to create many LeadersGroups.
     */
    data: LeadersGroupCreateManyInput | LeadersGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadersGroup update
   */
  export type LeadersGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadersGroup.
     */
    data: XOR<LeadersGroupUpdateInput, LeadersGroupUncheckedUpdateInput>
    /**
     * Choose, which LeadersGroup to update.
     */
    where: LeadersGroupWhereUniqueInput
  }

  /**
   * LeadersGroup updateMany
   */
  export type LeadersGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadersGroups.
     */
    data: XOR<LeadersGroupUpdateManyMutationInput, LeadersGroupUncheckedUpdateManyInput>
    /**
     * Filter which LeadersGroups to update
     */
    where?: LeadersGroupWhereInput
    /**
     * Limit how many LeadersGroups to update.
     */
    limit?: number
  }

  /**
   * LeadersGroup updateManyAndReturn
   */
  export type LeadersGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * The data used to update LeadersGroups.
     */
    data: XOR<LeadersGroupUpdateManyMutationInput, LeadersGroupUncheckedUpdateManyInput>
    /**
     * Filter which LeadersGroups to update
     */
    where?: LeadersGroupWhereInput
    /**
     * Limit how many LeadersGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadersGroup upsert
   */
  export type LeadersGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadersGroup to update in case it exists.
     */
    where: LeadersGroupWhereUniqueInput
    /**
     * In case the LeadersGroup found by the `where` argument doesn't exist, create a new LeadersGroup with this data.
     */
    create: XOR<LeadersGroupCreateInput, LeadersGroupUncheckedCreateInput>
    /**
     * In case the LeadersGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadersGroupUpdateInput, LeadersGroupUncheckedUpdateInput>
  }

  /**
   * LeadersGroup delete
   */
  export type LeadersGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
    /**
     * Filter which LeadersGroup to delete.
     */
    where: LeadersGroupWhereUniqueInput
  }

  /**
   * LeadersGroup deleteMany
   */
  export type LeadersGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadersGroups to delete
     */
    where?: LeadersGroupWhereInput
    /**
     * Limit how many LeadersGroups to delete.
     */
    limit?: number
  }

  /**
   * LeadersGroup without action
   */
  export type LeadersGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersGroup
     */
    select?: LeadersGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadersGroup
     */
    omit?: LeadersGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersGroupInclude<ExtArgs> | null
  }


  /**
   * Model ParentChild
   */

  export type AggregateParentChild = {
    _count: ParentChildCountAggregateOutputType | null
    _avg: ParentChildAvgAggregateOutputType | null
    _sum: ParentChildSumAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  export type ParentChildAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    groupId: number | null
  }

  export type ParentChildSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    groupId: number | null
  }

  export type ParentChildMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    childName: string | null
    groupId: number | null
    relation: $Enums.ParentRelation | null
  }

  export type ParentChildMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    childName: string | null
    groupId: number | null
    relation: $Enums.ParentRelation | null
  }

  export type ParentChildCountAggregateOutputType = {
    id: number
    parentId: number
    childName: number
    groupId: number
    relation: number
    _all: number
  }


  export type ParentChildAvgAggregateInputType = {
    id?: true
    parentId?: true
    groupId?: true
  }

  export type ParentChildSumAggregateInputType = {
    id?: true
    parentId?: true
    groupId?: true
  }

  export type ParentChildMinAggregateInputType = {
    id?: true
    parentId?: true
    childName?: true
    groupId?: true
    relation?: true
  }

  export type ParentChildMaxAggregateInputType = {
    id?: true
    parentId?: true
    childName?: true
    groupId?: true
    relation?: true
  }

  export type ParentChildCountAggregateInputType = {
    id?: true
    parentId?: true
    childName?: true
    groupId?: true
    relation?: true
    _all?: true
  }

  export type ParentChildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChild to aggregate.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentChildren
    **/
    _count?: true | ParentChildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentChildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentChildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentChildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentChildMaxAggregateInputType
  }

  export type GetParentChildAggregateType<T extends ParentChildAggregateArgs> = {
        [P in keyof T & keyof AggregateParentChild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentChild[P]>
      : GetScalarType<T[P], AggregateParentChild[P]>
  }




  export type ParentChildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentChildWhereInput
    orderBy?: ParentChildOrderByWithAggregationInput | ParentChildOrderByWithAggregationInput[]
    by: ParentChildScalarFieldEnum[] | ParentChildScalarFieldEnum
    having?: ParentChildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentChildCountAggregateInputType | true
    _avg?: ParentChildAvgAggregateInputType
    _sum?: ParentChildSumAggregateInputType
    _min?: ParentChildMinAggregateInputType
    _max?: ParentChildMaxAggregateInputType
  }

  export type ParentChildGroupByOutputType = {
    id: number
    parentId: number
    childName: string
    groupId: number
    relation: $Enums.ParentRelation
    _count: ParentChildCountAggregateOutputType | null
    _avg: ParentChildAvgAggregateOutputType | null
    _sum: ParentChildSumAggregateOutputType | null
    _min: ParentChildMinAggregateOutputType | null
    _max: ParentChildMaxAggregateOutputType | null
  }

  type GetParentChildGroupByPayload<T extends ParentChildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentChildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentChildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
            : GetScalarType<T[P], ParentChildGroupByOutputType[P]>
        }
      >
    >


  export type ParentChildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childName?: boolean
    groupId?: boolean
    relation?: boolean
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childName?: boolean
    groupId?: boolean
    relation?: boolean
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    childName?: boolean
    groupId?: boolean
    relation?: boolean
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentChild"]>

  export type ParentChildSelectScalar = {
    id?: boolean
    parentId?: boolean
    childName?: boolean
    groupId?: boolean
    relation?: boolean
  }

  export type ParentChildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "childName" | "groupId" | "relation", ExtArgs["result"]["parentChild"]>
  export type ParentChildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ParentChildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $ParentChildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentChild"
    objects: {
      parent: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number
      childName: string
      groupId: number
      relation: $Enums.ParentRelation
    }, ExtArgs["result"]["parentChild"]>
    composites: {}
  }

  type ParentChildGetPayload<S extends boolean | null | undefined | ParentChildDefaultArgs> = $Result.GetResult<Prisma.$ParentChildPayload, S>

  type ParentChildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentChildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentChildCountAggregateInputType | true
    }

  export interface ParentChildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentChild'], meta: { name: 'ParentChild' } }
    /**
     * Find zero or one ParentChild that matches the filter.
     * @param {ParentChildFindUniqueArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentChildFindUniqueArgs>(args: SelectSubset<T, ParentChildFindUniqueArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ParentChild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentChildFindUniqueOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentChildFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentChildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ParentChild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentChildFindFirstArgs>(args?: SelectSubset<T, ParentChildFindFirstArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ParentChild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindFirstOrThrowArgs} args - Arguments to find a ParentChild
     * @example
     * // Get one ParentChild
     * const parentChild = await prisma.parentChild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentChildFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentChildFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ParentChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentChildren
     * const parentChildren = await prisma.parentChild.findMany()
     * 
     * // Get first 10 ParentChildren
     * const parentChildren = await prisma.parentChild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentChildFindManyArgs>(args?: SelectSubset<T, ParentChildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ParentChild.
     * @param {ParentChildCreateArgs} args - Arguments to create a ParentChild.
     * @example
     * // Create one ParentChild
     * const ParentChild = await prisma.parentChild.create({
     *   data: {
     *     // ... data to create a ParentChild
     *   }
     * })
     * 
     */
    create<T extends ParentChildCreateArgs>(args: SelectSubset<T, ParentChildCreateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ParentChildren.
     * @param {ParentChildCreateManyArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentChildCreateManyArgs>(args?: SelectSubset<T, ParentChildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentChildren and returns the data saved in the database.
     * @param {ParentChildCreateManyAndReturnArgs} args - Arguments to create many ParentChildren.
     * @example
     * // Create many ParentChildren
     * const parentChild = await prisma.parentChild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentChildren and only return the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentChildCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentChildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ParentChild.
     * @param {ParentChildDeleteArgs} args - Arguments to delete one ParentChild.
     * @example
     * // Delete one ParentChild
     * const ParentChild = await prisma.parentChild.delete({
     *   where: {
     *     // ... filter to delete one ParentChild
     *   }
     * })
     * 
     */
    delete<T extends ParentChildDeleteArgs>(args: SelectSubset<T, ParentChildDeleteArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ParentChild.
     * @param {ParentChildUpdateArgs} args - Arguments to update one ParentChild.
     * @example
     * // Update one ParentChild
     * const parentChild = await prisma.parentChild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentChildUpdateArgs>(args: SelectSubset<T, ParentChildUpdateArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ParentChildren.
     * @param {ParentChildDeleteManyArgs} args - Arguments to filter ParentChildren to delete.
     * @example
     * // Delete a few ParentChildren
     * const { count } = await prisma.parentChild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentChildDeleteManyArgs>(args?: SelectSubset<T, ParentChildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentChildUpdateManyArgs>(args: SelectSubset<T, ParentChildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentChildren and returns the data updated in the database.
     * @param {ParentChildUpdateManyAndReturnArgs} args - Arguments to update many ParentChildren.
     * @example
     * // Update many ParentChildren
     * const parentChild = await prisma.parentChild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentChildren and only return the `id`
     * const parentChildWithIdOnly = await prisma.parentChild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParentChildUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentChildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ParentChild.
     * @param {ParentChildUpsertArgs} args - Arguments to update or create a ParentChild.
     * @example
     * // Update or create a ParentChild
     * const parentChild = await prisma.parentChild.upsert({
     *   create: {
     *     // ... data to create a ParentChild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentChild we want to update
     *   }
     * })
     */
    upsert<T extends ParentChildUpsertArgs>(args: SelectSubset<T, ParentChildUpsertArgs<ExtArgs>>): Prisma__ParentChildClient<$Result.GetResult<Prisma.$ParentChildPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildCountArgs} args - Arguments to filter ParentChildren to count.
     * @example
     * // Count the number of ParentChildren
     * const count = await prisma.parentChild.count({
     *   where: {
     *     // ... the filter for the ParentChildren we want to count
     *   }
     * })
    **/
    count<T extends ParentChildCountArgs>(
      args?: Subset<T, ParentChildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentChildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentChildAggregateArgs>(args: Subset<T, ParentChildAggregateArgs>): Prisma.PrismaPromise<GetParentChildAggregateType<T>>

    /**
     * Group by ParentChild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentChildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentChildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentChildGroupByArgs['orderBy'] }
        : { orderBy?: ParentChildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentChildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentChildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentChild model
   */
  readonly fields: ParentChildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentChild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentChildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParentChild model
   */ 
  interface ParentChildFieldRefs {
    readonly id: FieldRef<"ParentChild", 'Int'>
    readonly parentId: FieldRef<"ParentChild", 'Int'>
    readonly childName: FieldRef<"ParentChild", 'String'>
    readonly groupId: FieldRef<"ParentChild", 'Int'>
    readonly relation: FieldRef<"ParentChild", 'ParentRelation'>
  }
    

  // Custom InputTypes
  /**
   * ParentChild findUnique
   */
  export type ParentChildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findUniqueOrThrow
   */
  export type ParentChildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild findFirst
   */
  export type ParentChildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findFirstOrThrow
   */
  export type ParentChildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChild to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentChildren.
     */
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild findMany
   */
  export type ParentChildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter, which ParentChildren to fetch.
     */
    where?: ParentChildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentChildren to fetch.
     */
    orderBy?: ParentChildOrderByWithRelationInput | ParentChildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentChildren.
     */
    cursor?: ParentChildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentChildren.
     */
    skip?: number
    distinct?: ParentChildScalarFieldEnum | ParentChildScalarFieldEnum[]
  }

  /**
   * ParentChild create
   */
  export type ParentChildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentChild.
     */
    data: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
  }

  /**
   * ParentChild createMany
   */
  export type ParentChildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentChild createManyAndReturn
   */
  export type ParentChildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to create many ParentChildren.
     */
    data: ParentChildCreateManyInput | ParentChildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild update
   */
  export type ParentChildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentChild.
     */
    data: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
    /**
     * Choose, which ParentChild to update.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild updateMany
   */
  export type ParentChildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to update.
     */
    limit?: number
  }

  /**
   * ParentChild updateManyAndReturn
   */
  export type ParentChildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * The data used to update ParentChildren.
     */
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyInput>
    /**
     * Filter which ParentChildren to update
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentChild upsert
   */
  export type ParentChildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentChild to update in case it exists.
     */
    where: ParentChildWhereUniqueInput
    /**
     * In case the ParentChild found by the `where` argument doesn't exist, create a new ParentChild with this data.
     */
    create: XOR<ParentChildCreateInput, ParentChildUncheckedCreateInput>
    /**
     * In case the ParentChild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentChildUpdateInput, ParentChildUncheckedUpdateInput>
  }

  /**
   * ParentChild delete
   */
  export type ParentChildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
    /**
     * Filter which ParentChild to delete.
     */
    where: ParentChildWhereUniqueInput
  }

  /**
   * ParentChild deleteMany
   */
  export type ParentChildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentChildren to delete
     */
    where?: ParentChildWhereInput
    /**
     * Limit how many ParentChildren to delete.
     */
    limit?: number
  }

  /**
   * ParentChild without action
   */
  export type ParentChildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentChild
     */
    select?: ParentChildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentChild
     */
    omit?: ParentChildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentChildInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    sentAt: Date | null
    readAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: number
    sentAt: number
    readAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    sentAt?: true
    readAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    sentAt?: true
    readAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    sentAt?: true
    readAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: string
    sentAt: Date
    readAt: Date | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    sentAt?: boolean
    readAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    sentAt?: boolean
    readAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    sentAt?: boolean
    readAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    sentAt?: boolean
    readAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "message" | "sentAt" | "readAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      message: string
      sentAt: Date
      readAt: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
    readonly message: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
    readonly readAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const YouthMovementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    city: 'city',
    postalCode: 'postalCode',
    street: 'street',
    houseNumber: 'houseNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YouthMovementScalarFieldEnum = (typeof YouthMovementScalarFieldEnum)[keyof typeof YouthMovementScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    cognitoId: 'cognitoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const YouthMovementUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    youthMovementId: 'youthMovementId',
    role: 'role'
  };

  export type YouthMovementUserScalarFieldEnum = (typeof YouthMovementUserScalarFieldEnum)[keyof typeof YouthMovementUserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    youthMovementId: 'youthMovementId',
    code: 'code',
    used: 'used',
    sentAt: 'sentAt',
    expiresAt: 'expiresAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minimumAge: 'minimumAge',
    maximumAge: 'maximumAge',
    youthMovementId: 'youthMovementId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    userId: 'userId',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image',
    amountOfComments: 'amountOfComments'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostLikeScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostLikeScalarFieldEnum = (typeof PostLikeScalarFieldEnum)[keyof typeof PostLikeScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    body: 'body',
    image: 'image',
    type: 'type',
    eventDate: 'eventDate',
    location: 'location',
    signUp: 'signUp',
    volunteer: 'volunteer',
    groupId: 'groupId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const LeadersGroupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId'
  };

  export type LeadersGroupScalarFieldEnum = (typeof LeadersGroupScalarFieldEnum)[keyof typeof LeadersGroupScalarFieldEnum]


  export const ParentChildScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    childName: 'childName',
    groupId: 'groupId',
    relation: 'relation'
  };

  export type ParentChildScalarFieldEnum = (typeof ParentChildScalarFieldEnum)[keyof typeof ParentChildScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message',
    sentAt: 'sentAt',
    readAt: 'readAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ParentRelation'
   */
  export type EnumParentRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentRelation'>
    


  /**
   * Reference to a field of type 'ParentRelation[]'
   */
  export type ListEnumParentRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentRelation[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type YouthMovementWhereInput = {
    AND?: YouthMovementWhereInput | YouthMovementWhereInput[]
    OR?: YouthMovementWhereInput[]
    NOT?: YouthMovementWhereInput | YouthMovementWhereInput[]
    id?: IntFilter<"YouthMovement"> | number
    name?: StringFilter<"YouthMovement"> | string
    description?: StringNullableFilter<"YouthMovement"> | string | null
    city?: StringFilter<"YouthMovement"> | string
    postalCode?: IntFilter<"YouthMovement"> | number
    street?: StringFilter<"YouthMovement"> | string
    houseNumber?: IntFilter<"YouthMovement"> | number
    createdAt?: DateTimeFilter<"YouthMovement"> | Date | string
    updatedAt?: DateTimeFilter<"YouthMovement"> | Date | string
    groups?: GroupListRelationFilter
    users?: YouthMovementUserListRelationFilter
    invites?: InvitationListRelationFilter
  }

  export type YouthMovementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    users?: YouthMovementUserOrderByRelationAggregateInput
    invites?: InvitationOrderByRelationAggregateInput
  }

  export type YouthMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YouthMovementWhereInput | YouthMovementWhereInput[]
    OR?: YouthMovementWhereInput[]
    NOT?: YouthMovementWhereInput | YouthMovementWhereInput[]
    name?: StringFilter<"YouthMovement"> | string
    description?: StringNullableFilter<"YouthMovement"> | string | null
    city?: StringFilter<"YouthMovement"> | string
    postalCode?: IntFilter<"YouthMovement"> | number
    street?: StringFilter<"YouthMovement"> | string
    houseNumber?: IntFilter<"YouthMovement"> | number
    createdAt?: DateTimeFilter<"YouthMovement"> | Date | string
    updatedAt?: DateTimeFilter<"YouthMovement"> | Date | string
    groups?: GroupListRelationFilter
    users?: YouthMovementUserListRelationFilter
    invites?: InvitationListRelationFilter
  }, "id">

  export type YouthMovementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YouthMovementCountOrderByAggregateInput
    _avg?: YouthMovementAvgOrderByAggregateInput
    _max?: YouthMovementMaxOrderByAggregateInput
    _min?: YouthMovementMinOrderByAggregateInput
    _sum?: YouthMovementSumOrderByAggregateInput
  }

  export type YouthMovementScalarWhereWithAggregatesInput = {
    AND?: YouthMovementScalarWhereWithAggregatesInput | YouthMovementScalarWhereWithAggregatesInput[]
    OR?: YouthMovementScalarWhereWithAggregatesInput[]
    NOT?: YouthMovementScalarWhereWithAggregatesInput | YouthMovementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YouthMovement"> | number
    name?: StringWithAggregatesFilter<"YouthMovement"> | string
    description?: StringNullableWithAggregatesFilter<"YouthMovement"> | string | null
    city?: StringWithAggregatesFilter<"YouthMovement"> | string
    postalCode?: IntWithAggregatesFilter<"YouthMovement"> | number
    street?: StringWithAggregatesFilter<"YouthMovement"> | string
    houseNumber?: IntWithAggregatesFilter<"YouthMovement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"YouthMovement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YouthMovement"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cognitoId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    youthMovements?: YouthMovementUserListRelationFilter
    posts?: PostListRelationFilter
    postLikes?: PostLikeListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    attendees?: AttendeeListRelationFilter
    volunteers?: VolunteerListRelationFilter
    leadersGroups?: LeadersGroupListRelationFilter
    parentChild?: ParentChildListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    cognitoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    youthMovements?: YouthMovementUserOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    postLikes?: PostLikeOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
    attendees?: AttendeeOrderByRelationAggregateInput
    volunteers?: VolunteerOrderByRelationAggregateInput
    leadersGroups?: LeadersGroupOrderByRelationAggregateInput
    parentChild?: ParentChildOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cognitoId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    youthMovements?: YouthMovementUserListRelationFilter
    posts?: PostListRelationFilter
    postLikes?: PostLikeListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
    attendees?: AttendeeListRelationFilter
    volunteers?: VolunteerListRelationFilter
    leadersGroups?: LeadersGroupListRelationFilter
    parentChild?: ParentChildListRelationFilter
  }, "id" | "email" | "cognitoId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    cognitoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    cognitoId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type YouthMovementUserWhereInput = {
    AND?: YouthMovementUserWhereInput | YouthMovementUserWhereInput[]
    OR?: YouthMovementUserWhereInput[]
    NOT?: YouthMovementUserWhereInput | YouthMovementUserWhereInput[]
    id?: IntFilter<"YouthMovementUser"> | number
    userId?: IntFilter<"YouthMovementUser"> | number
    youthMovementId?: IntFilter<"YouthMovementUser"> | number
    role?: EnumRoleFilter<"YouthMovementUser"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
  }

  export type YouthMovementUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    youthMovement?: YouthMovementOrderByWithRelationInput
  }

  export type YouthMovementUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_youthMovementId?: YouthMovementUserUserIdYouthMovementIdCompoundUniqueInput
    AND?: YouthMovementUserWhereInput | YouthMovementUserWhereInput[]
    OR?: YouthMovementUserWhereInput[]
    NOT?: YouthMovementUserWhereInput | YouthMovementUserWhereInput[]
    userId?: IntFilter<"YouthMovementUser"> | number
    youthMovementId?: IntFilter<"YouthMovementUser"> | number
    role?: EnumRoleFilter<"YouthMovementUser"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
  }, "id" | "userId_youthMovementId">

  export type YouthMovementUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
    role?: SortOrder
    _count?: YouthMovementUserCountOrderByAggregateInput
    _avg?: YouthMovementUserAvgOrderByAggregateInput
    _max?: YouthMovementUserMaxOrderByAggregateInput
    _min?: YouthMovementUserMinOrderByAggregateInput
    _sum?: YouthMovementUserSumOrderByAggregateInput
  }

  export type YouthMovementUserScalarWhereWithAggregatesInput = {
    AND?: YouthMovementUserScalarWhereWithAggregatesInput | YouthMovementUserScalarWhereWithAggregatesInput[]
    OR?: YouthMovementUserScalarWhereWithAggregatesInput[]
    NOT?: YouthMovementUserScalarWhereWithAggregatesInput | YouthMovementUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YouthMovementUser"> | number
    userId?: IntWithAggregatesFilter<"YouthMovementUser"> | number
    youthMovementId?: IntWithAggregatesFilter<"YouthMovementUser"> | number
    role?: EnumRoleWithAggregatesFilter<"YouthMovementUser"> | $Enums.Role
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: IntFilter<"Invitation"> | number
    email?: StringFilter<"Invitation"> | string
    role?: EnumRoleFilter<"Invitation"> | $Enums.Role
    youthMovementId?: IntFilter<"Invitation"> | number
    code?: StringFilter<"Invitation"> | string
    used?: BoolFilter<"Invitation"> | boolean
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    youthMovementId?: SortOrder
    code?: SortOrder
    used?: SortOrder
    sentAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    youthMovement?: YouthMovementOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    code?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    role?: EnumRoleFilter<"Invitation"> | $Enums.Role
    youthMovementId?: IntFilter<"Invitation"> | number
    used?: BoolFilter<"Invitation"> | boolean
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
  }, "id" | "email" | "code">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    youthMovementId?: SortOrder
    code?: SortOrder
    used?: SortOrder
    sentAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _avg?: InvitationAvgOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
    _sum?: InvitationSumOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invitation"> | number
    email?: StringWithAggregatesFilter<"Invitation"> | string
    role?: EnumRoleWithAggregatesFilter<"Invitation"> | $Enums.Role
    youthMovementId?: IntWithAggregatesFilter<"Invitation"> | number
    code?: StringWithAggregatesFilter<"Invitation"> | string
    used?: BoolWithAggregatesFilter<"Invitation"> | boolean
    sentAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    minimumAge?: IntFilter<"Group"> | number
    maximumAge?: IntFilter<"Group"> | number
    youthMovementId?: IntFilter<"Group"> | number
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
    posts?: PostListRelationFilter
    events?: EventListRelationFilter
    leadersGroups?: LeadersGroupListRelationFilter
    parentChild?: ParentChildListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
    youthMovement?: YouthMovementOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    leadersGroups?: LeadersGroupOrderByRelationAggregateInput
    parentChild?: ParentChildOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    minimumAge?: IntFilter<"Group"> | number
    maximumAge?: IntFilter<"Group"> | number
    youthMovementId?: IntFilter<"Group"> | number
    youthMovement?: XOR<YouthMovementScalarRelationFilter, YouthMovementWhereInput>
    posts?: PostListRelationFilter
    events?: EventListRelationFilter
    leadersGroups?: LeadersGroupListRelationFilter
    parentChild?: ParentChildListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    name?: StringWithAggregatesFilter<"Group"> | string
    minimumAge?: IntWithAggregatesFilter<"Group"> | number
    maximumAge?: IntWithAggregatesFilter<"Group"> | number
    youthMovementId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    groupId?: IntNullableFilter<"Post"> | number | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    image?: StringNullableFilter<"Post"> | string | null
    amountOfComments?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    likes?: PostLikeListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    amountOfComments?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    likes?: PostLikeOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    groupId?: IntNullableFilter<"Post"> | number | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    image?: StringNullableFilter<"Post"> | string | null
    amountOfComments?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    likes?: PostLikeListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    amountOfComments?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    userId?: IntWithAggregatesFilter<"Post"> | number
    groupId?: IntNullableWithAggregatesFilter<"Post"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Post"> | string | null
    amountOfComments?: IntWithAggregatesFilter<"Post"> | number
  }

  export type PostLikeWhereInput = {
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    id?: IntFilter<"PostLike"> | number
    postId?: IntFilter<"PostLike"> | number
    userId?: IntFilter<"PostLike"> | number
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostLikeOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    postId?: IntFilter<"PostLike"> | number
    userId?: IntFilter<"PostLike"> | number
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostLikeOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostLikeCountOrderByAggregateInput
    _avg?: PostLikeAvgOrderByAggregateInput
    _max?: PostLikeMaxOrderByAggregateInput
    _min?: PostLikeMinOrderByAggregateInput
    _sum?: PostLikeSumOrderByAggregateInput
  }

  export type PostLikeScalarWhereWithAggregatesInput = {
    AND?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    OR?: PostLikeScalarWhereWithAggregatesInput[]
    NOT?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLike"> | number
    postId?: IntWithAggregatesFilter<"PostLike"> | number
    userId?: IntWithAggregatesFilter<"PostLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostLike"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    body?: StringFilter<"Event"> | string
    image?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    signUp?: BoolFilter<"Event"> | boolean
    volunteer?: BoolFilter<"Event"> | boolean
    groupId?: IntNullableFilter<"Event"> | number | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    attendees?: AttendeeListRelationFilter
    volunteers?: VolunteerListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    body?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    eventDate?: SortOrder
    location?: SortOrderInput | SortOrder
    signUp?: SortOrder
    volunteer?: SortOrder
    groupId?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    attendees?: AttendeeOrderByRelationAggregateInput
    volunteers?: VolunteerOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    body?: StringFilter<"Event"> | string
    image?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    signUp?: BoolFilter<"Event"> | boolean
    volunteer?: BoolFilter<"Event"> | boolean
    groupId?: IntNullableFilter<"Event"> | number | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    attendees?: AttendeeListRelationFilter
    volunteers?: VolunteerListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    body?: SortOrder
    image?: SortOrderInput | SortOrder
    type?: SortOrder
    eventDate?: SortOrder
    location?: SortOrderInput | SortOrder
    signUp?: SortOrder
    volunteer?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    body?: StringWithAggregatesFilter<"Event"> | string
    image?: StringNullableWithAggregatesFilter<"Event"> | string | null
    type?: StringWithAggregatesFilter<"Event"> | string
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    signUp?: BoolWithAggregatesFilter<"Event"> | boolean
    volunteer?: BoolWithAggregatesFilter<"Event"> | boolean
    groupId?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: IntFilter<"Attendee"> | number
    eventId?: IntFilter<"Attendee"> | number
    userId?: IntFilter<"Attendee"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    eventId?: IntFilter<"Attendee"> | number
    userId?: IntFilter<"Attendee"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _avg?: AttendeeAvgOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
    _sum?: AttendeeSumOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendee"> | number
    eventId?: IntWithAggregatesFilter<"Attendee"> | number
    userId?: IntWithAggregatesFilter<"Attendee"> | number
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: IntFilter<"Volunteer"> | number
    eventId?: IntFilter<"Volunteer"> | number
    userId?: IntFilter<"Volunteer"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    eventId?: IntFilter<"Volunteer"> | number
    userId?: IntFilter<"Volunteer"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Volunteer"> | number
    eventId?: IntWithAggregatesFilter<"Volunteer"> | number
    userId?: IntWithAggregatesFilter<"Volunteer"> | number
  }

  export type LeadersGroupWhereInput = {
    AND?: LeadersGroupWhereInput | LeadersGroupWhereInput[]
    OR?: LeadersGroupWhereInput[]
    NOT?: LeadersGroupWhereInput | LeadersGroupWhereInput[]
    id?: IntFilter<"LeadersGroup"> | number
    userId?: IntFilter<"LeadersGroup"> | number
    groupId?: IntFilter<"LeadersGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type LeadersGroupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type LeadersGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeadersGroupWhereInput | LeadersGroupWhereInput[]
    OR?: LeadersGroupWhereInput[]
    NOT?: LeadersGroupWhereInput | LeadersGroupWhereInput[]
    userId?: IntFilter<"LeadersGroup"> | number
    groupId?: IntFilter<"LeadersGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type LeadersGroupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    _count?: LeadersGroupCountOrderByAggregateInput
    _avg?: LeadersGroupAvgOrderByAggregateInput
    _max?: LeadersGroupMaxOrderByAggregateInput
    _min?: LeadersGroupMinOrderByAggregateInput
    _sum?: LeadersGroupSumOrderByAggregateInput
  }

  export type LeadersGroupScalarWhereWithAggregatesInput = {
    AND?: LeadersGroupScalarWhereWithAggregatesInput | LeadersGroupScalarWhereWithAggregatesInput[]
    OR?: LeadersGroupScalarWhereWithAggregatesInput[]
    NOT?: LeadersGroupScalarWhereWithAggregatesInput | LeadersGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeadersGroup"> | number
    userId?: IntWithAggregatesFilter<"LeadersGroup"> | number
    groupId?: IntWithAggregatesFilter<"LeadersGroup"> | number
  }

  export type ParentChildWhereInput = {
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    id?: IntFilter<"ParentChild"> | number
    parentId?: IntFilter<"ParentChild"> | number
    childName?: StringFilter<"ParentChild"> | string
    groupId?: IntFilter<"ParentChild"> | number
    relation?: EnumParentRelationFilter<"ParentChild"> | $Enums.ParentRelation
    parent?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type ParentChildOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrder
    childName?: SortOrder
    groupId?: SortOrder
    relation?: SortOrder
    parent?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type ParentChildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParentChildWhereInput | ParentChildWhereInput[]
    OR?: ParentChildWhereInput[]
    NOT?: ParentChildWhereInput | ParentChildWhereInput[]
    parentId?: IntFilter<"ParentChild"> | number
    childName?: StringFilter<"ParentChild"> | string
    groupId?: IntFilter<"ParentChild"> | number
    relation?: EnumParentRelationFilter<"ParentChild"> | $Enums.ParentRelation
    parent?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type ParentChildOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrder
    childName?: SortOrder
    groupId?: SortOrder
    relation?: SortOrder
    _count?: ParentChildCountOrderByAggregateInput
    _avg?: ParentChildAvgOrderByAggregateInput
    _max?: ParentChildMaxOrderByAggregateInput
    _min?: ParentChildMinOrderByAggregateInput
    _sum?: ParentChildSumOrderByAggregateInput
  }

  export type ParentChildScalarWhereWithAggregatesInput = {
    AND?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    OR?: ParentChildScalarWhereWithAggregatesInput[]
    NOT?: ParentChildScalarWhereWithAggregatesInput | ParentChildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParentChild"> | number
    parentId?: IntWithAggregatesFilter<"ParentChild"> | number
    childName?: StringWithAggregatesFilter<"ParentChild"> | string
    groupId?: IntWithAggregatesFilter<"ParentChild"> | number
    relation?: EnumParentRelationWithAggregatesFilter<"ParentChild"> | $Enums.ParentRelation
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
    message?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type YouthMovementCreateInput = {
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutYouthMovementInput
    users?: YouthMovementUserCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutYouthMovementInput
    users?: YouthMovementUserUncheckedCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationUncheckedCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutYouthMovementNestedInput
    users?: YouthMovementUserUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutYouthMovementNestedInput
    users?: YouthMovementUserUncheckedUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUncheckedUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YouthMovementUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YouthMovementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YouthMovementUserCreateInput = {
    role: $Enums.Role
    user: UserCreateNestedOneWithoutYouthMovementsInput
    youthMovement: YouthMovementCreateNestedOneWithoutUsersInput
  }

  export type YouthMovementUserUncheckedCreateInput = {
    id?: number
    userId: number
    youthMovementId: number
    role: $Enums.Role
  }

  export type YouthMovementUserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutYouthMovementsNestedInput
    youthMovement?: YouthMovementUpdateOneRequiredWithoutUsersNestedInput
  }

  export type YouthMovementUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type YouthMovementUserCreateManyInput = {
    id?: number
    userId: number
    youthMovementId: number
    role: $Enums.Role
  }

  export type YouthMovementUserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type YouthMovementUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type InvitationCreateInput = {
    email: string
    role: $Enums.Role
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
    youthMovement: YouthMovementCreateNestedOneWithoutInvitesInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: number
    email: string
    role: $Enums.Role
    youthMovementId: number
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type InvitationUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youthMovement?: YouthMovementUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    youthMovementId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationCreateManyInput = {
    id?: number
    email: string
    role: $Enums.Role
    youthMovementId: number
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type InvitationUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    youthMovementId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateInput = {
    name: string
    minimumAge: number
    maximumAge: number
    youthMovement: YouthMovementCreateNestedOneWithoutGroupsInput
    posts?: PostCreateNestedManyWithoutGroupInput
    events?: EventCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovement?: YouthMovementUpdateOneRequiredWithoutGroupsNestedInput
    posts?: PostUpdateManyWithoutGroupNestedInput
    events?: EventUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutGroupNestedInput
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    title: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    user: UserCreateNestedOneWithoutPostsInput
    group?: GroupCreateNestedOneWithoutPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    userId: number
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    group?: GroupUpdateOneWithoutPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    body: string
    userId: number
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeCreateInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateManyInput = {
    id?: number
    postId: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    group?: GroupCreateNestedOneWithoutEventsInput
    attendees?: AttendeeCreateNestedManyWithoutEventInput
    volunteers?: VolunteerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    groupId?: number | null
    attendees?: AttendeeUncheckedCreateNestedManyWithoutEventInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneWithoutEventsNestedInput
    attendees?: AttendeeUpdateManyWithoutEventNestedInput
    volunteers?: VolunteerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    attendees?: AttendeeUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    groupId?: number | null
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttendeeCreateInput = {
    event: EventCreateNestedOneWithoutAttendeesInput
    user: UserCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: number
    eventId: number
    userId: number
  }

  export type AttendeeUpdateInput = {
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendeeCreateManyInput = {
    id?: number
    eventId: number
    userId: number
  }

  export type AttendeeUpdateManyMutationInput = {

  }

  export type AttendeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerCreateInput = {
    event: EventCreateNestedOneWithoutVolunteersInput
    user: UserCreateNestedOneWithoutVolunteersInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: number
    eventId: number
    userId: number
  }

  export type VolunteerUpdateInput = {
    event?: EventUpdateOneRequiredWithoutVolunteersNestedInput
    user?: UserUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerCreateManyInput = {
    id?: number
    eventId: number
    userId: number
  }

  export type VolunteerUpdateManyMutationInput = {

  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadersGroupCreateInput = {
    user: UserCreateNestedOneWithoutLeadersGroupsInput
    group: GroupCreateNestedOneWithoutLeadersGroupsInput
  }

  export type LeadersGroupUncheckedCreateInput = {
    id?: number
    userId: number
    groupId: number
  }

  export type LeadersGroupUpdateInput = {
    user?: UserUpdateOneRequiredWithoutLeadersGroupsNestedInput
    group?: GroupUpdateOneRequiredWithoutLeadersGroupsNestedInput
  }

  export type LeadersGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadersGroupCreateManyInput = {
    id?: number
    userId: number
    groupId: number
  }

  export type LeadersGroupUpdateManyMutationInput = {

  }

  export type LeadersGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildCreateInput = {
    childName: string
    relation: $Enums.ParentRelation
    parent: UserCreateNestedOneWithoutParentChildInput
    group: GroupCreateNestedOneWithoutParentChildInput
  }

  export type ParentChildUncheckedCreateInput = {
    id?: number
    parentId: number
    childName: string
    groupId: number
    relation: $Enums.ParentRelation
  }

  export type ParentChildUpdateInput = {
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
    parent?: UserUpdateOneRequiredWithoutParentChildNestedInput
    group?: GroupUpdateOneRequiredWithoutParentChildNestedInput
  }

  export type ParentChildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type ParentChildCreateManyInput = {
    id?: number
    parentId: number
    childName: string
    groupId: number
    relation: $Enums.ParentRelation
  }

  export type ParentChildUpdateManyMutationInput = {
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type ParentChildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type MessageCreateInput = {
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type YouthMovementUserListRelationFilter = {
    every?: YouthMovementUserWhereInput
    some?: YouthMovementUserWhereInput
    none?: YouthMovementUserWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YouthMovementUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YouthMovementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YouthMovementAvgOrderByAggregateInput = {
    id?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
  }

  export type YouthMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YouthMovementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YouthMovementSumOrderByAggregateInput = {
    id?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostLikeListRelationFilter = {
    every?: PostLikeWhereInput
    some?: PostLikeWhereInput
    none?: PostLikeWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type AttendeeListRelationFilter = {
    every?: AttendeeWhereInput
    some?: AttendeeWhereInput
    none?: AttendeeWhereInput
  }

  export type VolunteerListRelationFilter = {
    every?: VolunteerWhereInput
    some?: VolunteerWhereInput
    none?: VolunteerWhereInput
  }

  export type LeadersGroupListRelationFilter = {
    every?: LeadersGroupWhereInput
    some?: LeadersGroupWhereInput
    none?: LeadersGroupWhereInput
  }

  export type ParentChildListRelationFilter = {
    every?: ParentChildWhereInput
    some?: ParentChildWhereInput
    none?: ParentChildWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadersGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentChildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    cognitoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    cognitoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    cognitoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type YouthMovementScalarRelationFilter = {
    is?: YouthMovementWhereInput
    isNot?: YouthMovementWhereInput
  }

  export type YouthMovementUserUserIdYouthMovementIdCompoundUniqueInput = {
    userId: number
    youthMovementId: number
  }

  export type YouthMovementUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
    role?: SortOrder
  }

  export type YouthMovementUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
  }

  export type YouthMovementUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
    role?: SortOrder
  }

  export type YouthMovementUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
    role?: SortOrder
  }

  export type YouthMovementUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    youthMovementId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    youthMovementId?: SortOrder
    code?: SortOrder
    used?: SortOrder
    sentAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvitationAvgOrderByAggregateInput = {
    id?: SortOrder
    youthMovementId?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    youthMovementId?: SortOrder
    code?: SortOrder
    used?: SortOrder
    sentAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    youthMovementId?: SortOrder
    code?: SortOrder
    used?: SortOrder
    sentAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type InvitationSumOrderByAggregateInput = {
    id?: SortOrder
    youthMovementId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    minimumAge?: SortOrder
    maximumAge?: SortOrder
    youthMovementId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    amountOfComments?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    amountOfComments?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    amountOfComments?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    amountOfComments?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    amountOfComments?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostLikeCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    body?: SortOrder
    image?: SortOrder
    type?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    signUp?: SortOrder
    volunteer?: SortOrder
    groupId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    body?: SortOrder
    image?: SortOrder
    type?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    signUp?: SortOrder
    volunteer?: SortOrder
    groupId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    body?: SortOrder
    image?: SortOrder
    type?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    signUp?: SortOrder
    volunteer?: SortOrder
    groupId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type AttendeeAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type AttendeeSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type LeadersGroupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type LeadersGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type LeadersGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type LeadersGroupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type LeadersGroupSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumParentRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentRelation | EnumParentRelationFieldRefInput<$PrismaModel>
    in?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumParentRelationFilter<$PrismaModel> | $Enums.ParentRelation
  }

  export type ParentChildCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childName?: SortOrder
    groupId?: SortOrder
    relation?: SortOrder
  }

  export type ParentChildAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    groupId?: SortOrder
  }

  export type ParentChildMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childName?: SortOrder
    groupId?: SortOrder
    relation?: SortOrder
  }

  export type ParentChildMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    childName?: SortOrder
    groupId?: SortOrder
    relation?: SortOrder
  }

  export type ParentChildSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumParentRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentRelation | EnumParentRelationFieldRefInput<$PrismaModel>
    in?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumParentRelationWithAggregatesFilter<$PrismaModel> | $Enums.ParentRelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentRelationFilter<$PrismaModel>
    _max?: NestedEnumParentRelationFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type GroupCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput> | GroupCreateWithoutYouthMovementInput[] | GroupUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutYouthMovementInput | GroupCreateOrConnectWithoutYouthMovementInput[]
    createMany?: GroupCreateManyYouthMovementInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type YouthMovementUserCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput> | YouthMovementUserCreateWithoutYouthMovementInput[] | YouthMovementUserUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutYouthMovementInput | YouthMovementUserCreateOrConnectWithoutYouthMovementInput[]
    createMany?: YouthMovementUserCreateManyYouthMovementInputEnvelope
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput> | InvitationCreateWithoutYouthMovementInput[] | InvitationUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutYouthMovementInput | InvitationCreateOrConnectWithoutYouthMovementInput[]
    createMany?: InvitationCreateManyYouthMovementInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput> | GroupCreateWithoutYouthMovementInput[] | GroupUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutYouthMovementInput | GroupCreateOrConnectWithoutYouthMovementInput[]
    createMany?: GroupCreateManyYouthMovementInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type YouthMovementUserUncheckedCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput> | YouthMovementUserCreateWithoutYouthMovementInput[] | YouthMovementUserUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutYouthMovementInput | YouthMovementUserCreateOrConnectWithoutYouthMovementInput[]
    createMany?: YouthMovementUserCreateManyYouthMovementInputEnvelope
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutYouthMovementInput = {
    create?: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput> | InvitationCreateWithoutYouthMovementInput[] | InvitationUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutYouthMovementInput | InvitationCreateOrConnectWithoutYouthMovementInput[]
    createMany?: InvitationCreateManyYouthMovementInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput> | GroupCreateWithoutYouthMovementInput[] | GroupUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutYouthMovementInput | GroupCreateOrConnectWithoutYouthMovementInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutYouthMovementInput | GroupUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: GroupCreateManyYouthMovementInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutYouthMovementInput | GroupUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutYouthMovementInput | GroupUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type YouthMovementUserUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput> | YouthMovementUserCreateWithoutYouthMovementInput[] | YouthMovementUserUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutYouthMovementInput | YouthMovementUserCreateOrConnectWithoutYouthMovementInput[]
    upsert?: YouthMovementUserUpsertWithWhereUniqueWithoutYouthMovementInput | YouthMovementUserUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: YouthMovementUserCreateManyYouthMovementInputEnvelope
    set?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    disconnect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    delete?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    update?: YouthMovementUserUpdateWithWhereUniqueWithoutYouthMovementInput | YouthMovementUserUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: YouthMovementUserUpdateManyWithWhereWithoutYouthMovementInput | YouthMovementUserUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput> | InvitationCreateWithoutYouthMovementInput[] | InvitationUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutYouthMovementInput | InvitationCreateOrConnectWithoutYouthMovementInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutYouthMovementInput | InvitationUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: InvitationCreateManyYouthMovementInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutYouthMovementInput | InvitationUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutYouthMovementInput | InvitationUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput> | GroupCreateWithoutYouthMovementInput[] | GroupUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutYouthMovementInput | GroupCreateOrConnectWithoutYouthMovementInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutYouthMovementInput | GroupUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: GroupCreateManyYouthMovementInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutYouthMovementInput | GroupUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutYouthMovementInput | GroupUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type YouthMovementUserUncheckedUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput> | YouthMovementUserCreateWithoutYouthMovementInput[] | YouthMovementUserUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutYouthMovementInput | YouthMovementUserCreateOrConnectWithoutYouthMovementInput[]
    upsert?: YouthMovementUserUpsertWithWhereUniqueWithoutYouthMovementInput | YouthMovementUserUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: YouthMovementUserCreateManyYouthMovementInputEnvelope
    set?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    disconnect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    delete?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    update?: YouthMovementUserUpdateWithWhereUniqueWithoutYouthMovementInput | YouthMovementUserUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: YouthMovementUserUpdateManyWithWhereWithoutYouthMovementInput | YouthMovementUserUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutYouthMovementNestedInput = {
    create?: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput> | InvitationCreateWithoutYouthMovementInput[] | InvitationUncheckedCreateWithoutYouthMovementInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutYouthMovementInput | InvitationCreateOrConnectWithoutYouthMovementInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutYouthMovementInput | InvitationUpsertWithWhereUniqueWithoutYouthMovementInput[]
    createMany?: InvitationCreateManyYouthMovementInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutYouthMovementInput | InvitationUpdateWithWhereUniqueWithoutYouthMovementInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutYouthMovementInput | InvitationUpdateManyWithWhereWithoutYouthMovementInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type YouthMovementUserCreateNestedManyWithoutUserInput = {
    create?: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput> | YouthMovementUserCreateWithoutUserInput[] | YouthMovementUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutUserInput | YouthMovementUserCreateOrConnectWithoutUserInput[]
    createMany?: YouthMovementUserCreateManyUserInputEnvelope
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type VolunteerCreateNestedManyWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput> | VolunteerCreateWithoutUserInput[] | VolunteerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput | VolunteerCreateOrConnectWithoutUserInput[]
    createMany?: VolunteerCreateManyUserInputEnvelope
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type LeadersGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput> | LeadersGroupCreateWithoutUserInput[] | LeadersGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutUserInput | LeadersGroupCreateOrConnectWithoutUserInput[]
    createMany?: LeadersGroupCreateManyUserInputEnvelope
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
  }

  export type ParentChildCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type YouthMovementUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput> | YouthMovementUserCreateWithoutUserInput[] | YouthMovementUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutUserInput | YouthMovementUserCreateOrConnectWithoutUserInput[]
    createMany?: YouthMovementUserCreateManyUserInputEnvelope
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput> | VolunteerCreateWithoutUserInput[] | VolunteerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput | VolunteerCreateOrConnectWithoutUserInput[]
    createMany?: VolunteerCreateManyUserInputEnvelope
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type LeadersGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput> | LeadersGroupCreateWithoutUserInput[] | LeadersGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutUserInput | LeadersGroupCreateOrConnectWithoutUserInput[]
    createMany?: LeadersGroupCreateManyUserInputEnvelope
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type YouthMovementUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput> | YouthMovementUserCreateWithoutUserInput[] | YouthMovementUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutUserInput | YouthMovementUserCreateOrConnectWithoutUserInput[]
    upsert?: YouthMovementUserUpsertWithWhereUniqueWithoutUserInput | YouthMovementUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YouthMovementUserCreateManyUserInputEnvelope
    set?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    disconnect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    delete?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    update?: YouthMovementUserUpdateWithWhereUniqueWithoutUserInput | YouthMovementUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YouthMovementUserUpdateManyWithWhereWithoutUserInput | YouthMovementUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutUserInput | AttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutUserInput | AttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutUserInput | AttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type VolunteerUpdateManyWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput> | VolunteerCreateWithoutUserInput[] | VolunteerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput | VolunteerCreateOrConnectWithoutUserInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutUserInput | VolunteerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VolunteerCreateManyUserInputEnvelope
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutUserInput | VolunteerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutUserInput | VolunteerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type LeadersGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput> | LeadersGroupCreateWithoutUserInput[] | LeadersGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutUserInput | LeadersGroupCreateOrConnectWithoutUserInput[]
    upsert?: LeadersGroupUpsertWithWhereUniqueWithoutUserInput | LeadersGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeadersGroupCreateManyUserInputEnvelope
    set?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    disconnect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    delete?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    update?: LeadersGroupUpdateWithWhereUniqueWithoutUserInput | LeadersGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeadersGroupUpdateManyWithWhereWithoutUserInput | LeadersGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
  }

  export type ParentChildUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput> | YouthMovementUserCreateWithoutUserInput[] | YouthMovementUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YouthMovementUserCreateOrConnectWithoutUserInput | YouthMovementUserCreateOrConnectWithoutUserInput[]
    upsert?: YouthMovementUserUpsertWithWhereUniqueWithoutUserInput | YouthMovementUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YouthMovementUserCreateManyUserInputEnvelope
    set?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    disconnect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    delete?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    connect?: YouthMovementUserWhereUniqueInput | YouthMovementUserWhereUniqueInput[]
    update?: YouthMovementUserUpdateWithWhereUniqueWithoutUserInput | YouthMovementUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YouthMovementUserUpdateManyWithWhereWithoutUserInput | YouthMovementUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutUserInput | AttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutUserInput | AttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutUserInput | AttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput> | VolunteerCreateWithoutUserInput[] | VolunteerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutUserInput | VolunteerCreateOrConnectWithoutUserInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutUserInput | VolunteerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VolunteerCreateManyUserInputEnvelope
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutUserInput | VolunteerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutUserInput | VolunteerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type LeadersGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput> | LeadersGroupCreateWithoutUserInput[] | LeadersGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutUserInput | LeadersGroupCreateOrConnectWithoutUserInput[]
    upsert?: LeadersGroupUpsertWithWhereUniqueWithoutUserInput | LeadersGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeadersGroupCreateManyUserInputEnvelope
    set?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    disconnect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    delete?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    update?: LeadersGroupUpdateWithWhereUniqueWithoutUserInput | LeadersGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeadersGroupUpdateManyWithWhereWithoutUserInput | LeadersGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
  }

  export type ParentChildUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput> | ParentChildCreateWithoutParentInput[] | ParentChildUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutParentInput | ParentChildCreateOrConnectWithoutParentInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutParentInput | ParentChildUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ParentChildCreateManyParentInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutParentInput | ParentChildUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutParentInput | ParentChildUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutYouthMovementsInput = {
    create?: XOR<UserCreateWithoutYouthMovementsInput, UserUncheckedCreateWithoutYouthMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutYouthMovementsInput
    connect?: UserWhereUniqueInput
  }

  export type YouthMovementCreateNestedOneWithoutUsersInput = {
    create?: XOR<YouthMovementCreateWithoutUsersInput, YouthMovementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutUsersInput
    connect?: YouthMovementWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutYouthMovementsNestedInput = {
    create?: XOR<UserCreateWithoutYouthMovementsInput, UserUncheckedCreateWithoutYouthMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutYouthMovementsInput
    upsert?: UserUpsertWithoutYouthMovementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutYouthMovementsInput, UserUpdateWithoutYouthMovementsInput>, UserUncheckedUpdateWithoutYouthMovementsInput>
  }

  export type YouthMovementUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<YouthMovementCreateWithoutUsersInput, YouthMovementUncheckedCreateWithoutUsersInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutUsersInput
    upsert?: YouthMovementUpsertWithoutUsersInput
    connect?: YouthMovementWhereUniqueInput
    update?: XOR<XOR<YouthMovementUpdateToOneWithWhereWithoutUsersInput, YouthMovementUpdateWithoutUsersInput>, YouthMovementUncheckedUpdateWithoutUsersInput>
  }

  export type YouthMovementCreateNestedOneWithoutInvitesInput = {
    create?: XOR<YouthMovementCreateWithoutInvitesInput, YouthMovementUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutInvitesInput
    connect?: YouthMovementWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type YouthMovementUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<YouthMovementCreateWithoutInvitesInput, YouthMovementUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutInvitesInput
    upsert?: YouthMovementUpsertWithoutInvitesInput
    connect?: YouthMovementWhereUniqueInput
    update?: XOR<XOR<YouthMovementUpdateToOneWithWhereWithoutInvitesInput, YouthMovementUpdateWithoutInvitesInput>, YouthMovementUncheckedUpdateWithoutInvitesInput>
  }

  export type YouthMovementCreateNestedOneWithoutGroupsInput = {
    create?: XOR<YouthMovementCreateWithoutGroupsInput, YouthMovementUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutGroupsInput
    connect?: YouthMovementWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutGroupInput = {
    create?: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput> | PostCreateWithoutGroupInput[] | PostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PostCreateOrConnectWithoutGroupInput | PostCreateOrConnectWithoutGroupInput[]
    createMany?: PostCreateManyGroupInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type LeadersGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput> | LeadersGroupCreateWithoutGroupInput[] | LeadersGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutGroupInput | LeadersGroupCreateOrConnectWithoutGroupInput[]
    createMany?: LeadersGroupCreateManyGroupInputEnvelope
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
  }

  export type ParentChildCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput> | ParentChildCreateWithoutGroupInput[] | ParentChildUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutGroupInput | ParentChildCreateOrConnectWithoutGroupInput[]
    createMany?: ParentChildCreateManyGroupInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput> | PostCreateWithoutGroupInput[] | PostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PostCreateOrConnectWithoutGroupInput | PostCreateOrConnectWithoutGroupInput[]
    createMany?: PostCreateManyGroupInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type LeadersGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput> | LeadersGroupCreateWithoutGroupInput[] | LeadersGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutGroupInput | LeadersGroupCreateOrConnectWithoutGroupInput[]
    createMany?: LeadersGroupCreateManyGroupInputEnvelope
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
  }

  export type ParentChildUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput> | ParentChildCreateWithoutGroupInput[] | ParentChildUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutGroupInput | ParentChildCreateOrConnectWithoutGroupInput[]
    createMany?: ParentChildCreateManyGroupInputEnvelope
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
  }

  export type YouthMovementUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<YouthMovementCreateWithoutGroupsInput, YouthMovementUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: YouthMovementCreateOrConnectWithoutGroupsInput
    upsert?: YouthMovementUpsertWithoutGroupsInput
    connect?: YouthMovementWhereUniqueInput
    update?: XOR<XOR<YouthMovementUpdateToOneWithWhereWithoutGroupsInput, YouthMovementUpdateWithoutGroupsInput>, YouthMovementUncheckedUpdateWithoutGroupsInput>
  }

  export type PostUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput> | PostCreateWithoutGroupInput[] | PostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PostCreateOrConnectWithoutGroupInput | PostCreateOrConnectWithoutGroupInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutGroupInput | PostUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PostCreateManyGroupInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutGroupInput | PostUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PostUpdateManyWithWhereWithoutGroupInput | PostUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type EventUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutGroupInput | EventUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutGroupInput | EventUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EventUpdateManyWithWhereWithoutGroupInput | EventUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LeadersGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput> | LeadersGroupCreateWithoutGroupInput[] | LeadersGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutGroupInput | LeadersGroupCreateOrConnectWithoutGroupInput[]
    upsert?: LeadersGroupUpsertWithWhereUniqueWithoutGroupInput | LeadersGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: LeadersGroupCreateManyGroupInputEnvelope
    set?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    disconnect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    delete?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    update?: LeadersGroupUpdateWithWhereUniqueWithoutGroupInput | LeadersGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: LeadersGroupUpdateManyWithWhereWithoutGroupInput | LeadersGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
  }

  export type ParentChildUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput> | ParentChildCreateWithoutGroupInput[] | ParentChildUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutGroupInput | ParentChildCreateOrConnectWithoutGroupInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutGroupInput | ParentChildUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParentChildCreateManyGroupInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutGroupInput | ParentChildUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutGroupInput | ParentChildUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput> | PostCreateWithoutGroupInput[] | PostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PostCreateOrConnectWithoutGroupInput | PostCreateOrConnectWithoutGroupInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutGroupInput | PostUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PostCreateManyGroupInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutGroupInput | PostUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PostUpdateManyWithWhereWithoutGroupInput | PostUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutGroupInput | EventUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutGroupInput | EventUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EventUpdateManyWithWhereWithoutGroupInput | EventUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput> | LeadersGroupCreateWithoutGroupInput[] | LeadersGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: LeadersGroupCreateOrConnectWithoutGroupInput | LeadersGroupCreateOrConnectWithoutGroupInput[]
    upsert?: LeadersGroupUpsertWithWhereUniqueWithoutGroupInput | LeadersGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: LeadersGroupCreateManyGroupInputEnvelope
    set?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    disconnect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    delete?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    connect?: LeadersGroupWhereUniqueInput | LeadersGroupWhereUniqueInput[]
    update?: LeadersGroupUpdateWithWhereUniqueWithoutGroupInput | LeadersGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: LeadersGroupUpdateManyWithWhereWithoutGroupInput | LeadersGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
  }

  export type ParentChildUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput> | ParentChildCreateWithoutGroupInput[] | ParentChildUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ParentChildCreateOrConnectWithoutGroupInput | ParentChildCreateOrConnectWithoutGroupInput[]
    upsert?: ParentChildUpsertWithWhereUniqueWithoutGroupInput | ParentChildUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ParentChildCreateManyGroupInputEnvelope
    set?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    disconnect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    delete?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    connect?: ParentChildWhereUniqueInput | ParentChildWhereUniqueInput[]
    update?: ParentChildUpdateWithWhereUniqueWithoutGroupInput | ParentChildUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ParentChildUpdateManyWithWhereWithoutGroupInput | ParentChildUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutPostsInput = {
    create?: XOR<GroupCreateWithoutPostsInput, GroupUncheckedCreateWithoutPostsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPostsInput
    connect?: GroupWhereUniqueInput
  }

  export type PostLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type GroupUpdateOneWithoutPostsNestedInput = {
    create?: XOR<GroupCreateWithoutPostsInput, GroupUncheckedCreateWithoutPostsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPostsInput
    upsert?: GroupUpsertWithoutPostsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutPostsInput, GroupUpdateWithoutPostsInput>, GroupUncheckedUpdateWithoutPostsInput>
  }

  export type PostLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    upsert?: UserUpsertWithoutPostLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikesInput, UserUpdateWithoutPostLikesInput>, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type GroupCreateNestedOneWithoutEventsInput = {
    create?: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput
    connect?: GroupWhereUniqueInput
  }

  export type AttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput> | AttendeeCreateWithoutEventInput[] | AttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput | AttendeeCreateOrConnectWithoutEventInput[]
    createMany?: AttendeeCreateManyEventInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type VolunteerCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput> | VolunteerCreateWithoutEventInput[] | VolunteerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutEventInput | VolunteerCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerCreateManyEventInputEnvelope
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput> | AttendeeCreateWithoutEventInput[] | AttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput | AttendeeCreateOrConnectWithoutEventInput[]
    createMany?: AttendeeCreateManyEventInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput> | VolunteerCreateWithoutEventInput[] | VolunteerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutEventInput | VolunteerCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerCreateManyEventInputEnvelope
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
  }

  export type GroupUpdateOneWithoutEventsNestedInput = {
    create?: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput
    upsert?: GroupUpsertWithoutEventsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutEventsInput, GroupUpdateWithoutEventsInput>, GroupUncheckedUpdateWithoutEventsInput>
  }

  export type AttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput> | AttendeeCreateWithoutEventInput[] | AttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput | AttendeeCreateOrConnectWithoutEventInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutEventInput | AttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendeeCreateManyEventInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutEventInput | AttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutEventInput | AttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type VolunteerUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput> | VolunteerCreateWithoutEventInput[] | VolunteerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutEventInput | VolunteerCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutEventInput | VolunteerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerCreateManyEventInputEnvelope
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutEventInput | VolunteerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutEventInput | VolunteerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type AttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput> | AttendeeCreateWithoutEventInput[] | AttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventInput | AttendeeCreateOrConnectWithoutEventInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutEventInput | AttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendeeCreateManyEventInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutEventInput | AttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutEventInput | AttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput> | VolunteerCreateWithoutEventInput[] | VolunteerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerCreateOrConnectWithoutEventInput | VolunteerCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerUpsertWithWhereUniqueWithoutEventInput | VolunteerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerCreateManyEventInputEnvelope
    set?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    disconnect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    delete?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    connect?: VolunteerWhereUniqueInput | VolunteerWhereUniqueInput[]
    update?: VolunteerUpdateWithWhereUniqueWithoutEventInput | VolunteerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerUpdateManyWithWhereWithoutEventInput | VolunteerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    upsert?: EventUpsertWithoutAttendeesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendeesInput, EventUpdateWithoutAttendeesInput>, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput
    upsert?: UserUpsertWithoutAttendeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendeesInput, UserUpdateWithoutAttendeesInput>, UserUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventCreateNestedOneWithoutVolunteersInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVolunteersInput = {
    create?: XOR<UserCreateWithoutVolunteersInput, UserUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteersInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutVolunteersNestedInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput
    upsert?: EventUpsertWithoutVolunteersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVolunteersInput, EventUpdateWithoutVolunteersInput>, EventUncheckedUpdateWithoutVolunteersInput>
  }

  export type UserUpdateOneRequiredWithoutVolunteersNestedInput = {
    create?: XOR<UserCreateWithoutVolunteersInput, UserUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteersInput
    upsert?: UserUpsertWithoutVolunteersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteersInput, UserUpdateWithoutVolunteersInput>, UserUncheckedUpdateWithoutVolunteersInput>
  }

  export type UserCreateNestedOneWithoutLeadersGroupsInput = {
    create?: XOR<UserCreateWithoutLeadersGroupsInput, UserUncheckedCreateWithoutLeadersGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadersGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutLeadersGroupsInput = {
    create?: XOR<GroupCreateWithoutLeadersGroupsInput, GroupUncheckedCreateWithoutLeadersGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutLeadersGroupsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeadersGroupsNestedInput = {
    create?: XOR<UserCreateWithoutLeadersGroupsInput, UserUncheckedCreateWithoutLeadersGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadersGroupsInput
    upsert?: UserUpsertWithoutLeadersGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadersGroupsInput, UserUpdateWithoutLeadersGroupsInput>, UserUncheckedUpdateWithoutLeadersGroupsInput>
  }

  export type GroupUpdateOneRequiredWithoutLeadersGroupsNestedInput = {
    create?: XOR<GroupCreateWithoutLeadersGroupsInput, GroupUncheckedCreateWithoutLeadersGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutLeadersGroupsInput
    upsert?: GroupUpsertWithoutLeadersGroupsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutLeadersGroupsInput, GroupUpdateWithoutLeadersGroupsInput>, GroupUncheckedUpdateWithoutLeadersGroupsInput>
  }

  export type UserCreateNestedOneWithoutParentChildInput = {
    create?: XOR<UserCreateWithoutParentChildInput, UserUncheckedCreateWithoutParentChildInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentChildInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutParentChildInput = {
    create?: XOR<GroupCreateWithoutParentChildInput, GroupUncheckedCreateWithoutParentChildInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParentChildInput
    connect?: GroupWhereUniqueInput
  }

  export type EnumParentRelationFieldUpdateOperationsInput = {
    set?: $Enums.ParentRelation
  }

  export type UserUpdateOneRequiredWithoutParentChildNestedInput = {
    create?: XOR<UserCreateWithoutParentChildInput, UserUncheckedCreateWithoutParentChildInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentChildInput
    upsert?: UserUpsertWithoutParentChildInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentChildInput, UserUpdateWithoutParentChildInput>, UserUncheckedUpdateWithoutParentChildInput>
  }

  export type GroupUpdateOneRequiredWithoutParentChildNestedInput = {
    create?: XOR<GroupCreateWithoutParentChildInput, GroupUncheckedCreateWithoutParentChildInput>
    connectOrCreate?: GroupCreateOrConnectWithoutParentChildInput
    upsert?: GroupUpsertWithoutParentChildInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutParentChildInput, GroupUpdateWithoutParentChildInput>, GroupUncheckedUpdateWithoutParentChildInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParentRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentRelation | EnumParentRelationFieldRefInput<$PrismaModel>
    in?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumParentRelationFilter<$PrismaModel> | $Enums.ParentRelation
  }

  export type NestedEnumParentRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentRelation | EnumParentRelationFieldRefInput<$PrismaModel>
    in?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentRelation[] | ListEnumParentRelationFieldRefInput<$PrismaModel>
    not?: NestedEnumParentRelationWithAggregatesFilter<$PrismaModel> | $Enums.ParentRelation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentRelationFilter<$PrismaModel>
    _max?: NestedEnumParentRelationFilter<$PrismaModel>
  }

  export type GroupCreateWithoutYouthMovementInput = {
    name: string
    minimumAge: number
    maximumAge: number
    posts?: PostCreateNestedManyWithoutGroupInput
    events?: EventCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutYouthMovementInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutYouthMovementInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput>
  }

  export type GroupCreateManyYouthMovementInputEnvelope = {
    data: GroupCreateManyYouthMovementInput | GroupCreateManyYouthMovementInput[]
    skipDuplicates?: boolean
  }

  export type YouthMovementUserCreateWithoutYouthMovementInput = {
    role: $Enums.Role
    user: UserCreateNestedOneWithoutYouthMovementsInput
  }

  export type YouthMovementUserUncheckedCreateWithoutYouthMovementInput = {
    id?: number
    userId: number
    role: $Enums.Role
  }

  export type YouthMovementUserCreateOrConnectWithoutYouthMovementInput = {
    where: YouthMovementUserWhereUniqueInput
    create: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput>
  }

  export type YouthMovementUserCreateManyYouthMovementInputEnvelope = {
    data: YouthMovementUserCreateManyYouthMovementInput | YouthMovementUserCreateManyYouthMovementInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutYouthMovementInput = {
    email: string
    role: $Enums.Role
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type InvitationUncheckedCreateWithoutYouthMovementInput = {
    id?: number
    email: string
    role: $Enums.Role
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type InvitationCreateOrConnectWithoutYouthMovementInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput>
  }

  export type InvitationCreateManyYouthMovementInputEnvelope = {
    data: InvitationCreateManyYouthMovementInput | InvitationCreateManyYouthMovementInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutYouthMovementInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutYouthMovementInput, GroupUncheckedUpdateWithoutYouthMovementInput>
    create: XOR<GroupCreateWithoutYouthMovementInput, GroupUncheckedCreateWithoutYouthMovementInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutYouthMovementInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutYouthMovementInput, GroupUncheckedUpdateWithoutYouthMovementInput>
  }

  export type GroupUpdateManyWithWhereWithoutYouthMovementInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutYouthMovementInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    minimumAge?: IntFilter<"Group"> | number
    maximumAge?: IntFilter<"Group"> | number
    youthMovementId?: IntFilter<"Group"> | number
  }

  export type YouthMovementUserUpsertWithWhereUniqueWithoutYouthMovementInput = {
    where: YouthMovementUserWhereUniqueInput
    update: XOR<YouthMovementUserUpdateWithoutYouthMovementInput, YouthMovementUserUncheckedUpdateWithoutYouthMovementInput>
    create: XOR<YouthMovementUserCreateWithoutYouthMovementInput, YouthMovementUserUncheckedCreateWithoutYouthMovementInput>
  }

  export type YouthMovementUserUpdateWithWhereUniqueWithoutYouthMovementInput = {
    where: YouthMovementUserWhereUniqueInput
    data: XOR<YouthMovementUserUpdateWithoutYouthMovementInput, YouthMovementUserUncheckedUpdateWithoutYouthMovementInput>
  }

  export type YouthMovementUserUpdateManyWithWhereWithoutYouthMovementInput = {
    where: YouthMovementUserScalarWhereInput
    data: XOR<YouthMovementUserUpdateManyMutationInput, YouthMovementUserUncheckedUpdateManyWithoutYouthMovementInput>
  }

  export type YouthMovementUserScalarWhereInput = {
    AND?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
    OR?: YouthMovementUserScalarWhereInput[]
    NOT?: YouthMovementUserScalarWhereInput | YouthMovementUserScalarWhereInput[]
    id?: IntFilter<"YouthMovementUser"> | number
    userId?: IntFilter<"YouthMovementUser"> | number
    youthMovementId?: IntFilter<"YouthMovementUser"> | number
    role?: EnumRoleFilter<"YouthMovementUser"> | $Enums.Role
  }

  export type InvitationUpsertWithWhereUniqueWithoutYouthMovementInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutYouthMovementInput, InvitationUncheckedUpdateWithoutYouthMovementInput>
    create: XOR<InvitationCreateWithoutYouthMovementInput, InvitationUncheckedCreateWithoutYouthMovementInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutYouthMovementInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutYouthMovementInput, InvitationUncheckedUpdateWithoutYouthMovementInput>
  }

  export type InvitationUpdateManyWithWhereWithoutYouthMovementInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutYouthMovementInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: IntFilter<"Invitation"> | number
    email?: StringFilter<"Invitation"> | string
    role?: EnumRoleFilter<"Invitation"> | $Enums.Role
    youthMovementId?: IntFilter<"Invitation"> | number
    code?: StringFilter<"Invitation"> | string
    used?: BoolFilter<"Invitation"> | boolean
    sentAt?: DateTimeFilter<"Invitation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
  }

  export type YouthMovementUserCreateWithoutUserInput = {
    role: $Enums.Role
    youthMovement: YouthMovementCreateNestedOneWithoutUsersInput
  }

  export type YouthMovementUserUncheckedCreateWithoutUserInput = {
    id?: number
    youthMovementId: number
    role: $Enums.Role
  }

  export type YouthMovementUserCreateOrConnectWithoutUserInput = {
    where: YouthMovementUserWhereUniqueInput
    create: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput>
  }

  export type YouthMovementUserCreateManyUserInputEnvelope = {
    data: YouthMovementUserCreateManyUserInput | YouthMovementUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    title: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    group?: GroupCreateNestedOneWithoutPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    body: string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeCreateManyUserInputEnvelope = {
    data: PostLikeCreateManyUserInput | PostLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type AttendeeCreateWithoutUserInput = {
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
  }

  export type AttendeeCreateOrConnectWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput>
  }

  export type AttendeeCreateManyUserInputEnvelope = {
    data: AttendeeCreateManyUserInput | AttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerCreateWithoutUserInput = {
    event: EventCreateNestedOneWithoutVolunteersInput
  }

  export type VolunteerUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
  }

  export type VolunteerCreateOrConnectWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
  }

  export type VolunteerCreateManyUserInputEnvelope = {
    data: VolunteerCreateManyUserInput | VolunteerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeadersGroupCreateWithoutUserInput = {
    group: GroupCreateNestedOneWithoutLeadersGroupsInput
  }

  export type LeadersGroupUncheckedCreateWithoutUserInput = {
    id?: number
    groupId: number
  }

  export type LeadersGroupCreateOrConnectWithoutUserInput = {
    where: LeadersGroupWhereUniqueInput
    create: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput>
  }

  export type LeadersGroupCreateManyUserInputEnvelope = {
    data: LeadersGroupCreateManyUserInput | LeadersGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildCreateWithoutParentInput = {
    childName: string
    relation: $Enums.ParentRelation
    group: GroupCreateNestedOneWithoutParentChildInput
  }

  export type ParentChildUncheckedCreateWithoutParentInput = {
    id?: number
    childName: string
    groupId: number
    relation: $Enums.ParentRelation
  }

  export type ParentChildCreateOrConnectWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildCreateManyParentInputEnvelope = {
    data: ParentChildCreateManyParentInput | ParentChildCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type YouthMovementUserUpsertWithWhereUniqueWithoutUserInput = {
    where: YouthMovementUserWhereUniqueInput
    update: XOR<YouthMovementUserUpdateWithoutUserInput, YouthMovementUserUncheckedUpdateWithoutUserInput>
    create: XOR<YouthMovementUserCreateWithoutUserInput, YouthMovementUserUncheckedCreateWithoutUserInput>
  }

  export type YouthMovementUserUpdateWithWhereUniqueWithoutUserInput = {
    where: YouthMovementUserWhereUniqueInput
    data: XOR<YouthMovementUserUpdateWithoutUserInput, YouthMovementUserUncheckedUpdateWithoutUserInput>
  }

  export type YouthMovementUserUpdateManyWithWhereWithoutUserInput = {
    where: YouthMovementUserScalarWhereInput
    data: XOR<YouthMovementUserUpdateManyMutationInput, YouthMovementUserUncheckedUpdateManyWithoutUserInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: IntFilter<"Post"> | number
    groupId?: IntNullableFilter<"Post"> | number | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    image?: StringNullableFilter<"Post"> | string | null
    amountOfComments?: IntFilter<"Post"> | number
  }

  export type PostLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutUserInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikeScalarWhereInput = {
    AND?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    OR?: PostLikeScalarWhereInput[]
    NOT?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    id?: IntFilter<"PostLike"> | number
    postId?: IntFilter<"PostLike"> | number
    userId?: IntFilter<"PostLike"> | number
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    readAt?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type AttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutUserInput, AttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutUserInput, AttendeeUncheckedUpdateWithoutUserInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutUserInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendeeScalarWhereInput = {
    AND?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    OR?: AttendeeScalarWhereInput[]
    NOT?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    id?: IntFilter<"Attendee"> | number
    eventId?: IntFilter<"Attendee"> | number
    userId?: IntFilter<"Attendee"> | number
  }

  export type VolunteerUpsertWithWhereUniqueWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    update: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerCreateWithoutUserInput, VolunteerUncheckedCreateWithoutUserInput>
  }

  export type VolunteerUpdateWithWhereUniqueWithoutUserInput = {
    where: VolunteerWhereUniqueInput
    data: XOR<VolunteerUpdateWithoutUserInput, VolunteerUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerUpdateManyWithWhereWithoutUserInput = {
    where: VolunteerScalarWhereInput
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyWithoutUserInput>
  }

  export type VolunteerScalarWhereInput = {
    AND?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
    OR?: VolunteerScalarWhereInput[]
    NOT?: VolunteerScalarWhereInput | VolunteerScalarWhereInput[]
    id?: IntFilter<"Volunteer"> | number
    eventId?: IntFilter<"Volunteer"> | number
    userId?: IntFilter<"Volunteer"> | number
  }

  export type LeadersGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: LeadersGroupWhereUniqueInput
    update: XOR<LeadersGroupUpdateWithoutUserInput, LeadersGroupUncheckedUpdateWithoutUserInput>
    create: XOR<LeadersGroupCreateWithoutUserInput, LeadersGroupUncheckedCreateWithoutUserInput>
  }

  export type LeadersGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: LeadersGroupWhereUniqueInput
    data: XOR<LeadersGroupUpdateWithoutUserInput, LeadersGroupUncheckedUpdateWithoutUserInput>
  }

  export type LeadersGroupUpdateManyWithWhereWithoutUserInput = {
    where: LeadersGroupScalarWhereInput
    data: XOR<LeadersGroupUpdateManyMutationInput, LeadersGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type LeadersGroupScalarWhereInput = {
    AND?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
    OR?: LeadersGroupScalarWhereInput[]
    NOT?: LeadersGroupScalarWhereInput | LeadersGroupScalarWhereInput[]
    id?: IntFilter<"LeadersGroup"> | number
    userId?: IntFilter<"LeadersGroup"> | number
    groupId?: IntFilter<"LeadersGroup"> | number
  }

  export type ParentChildUpsertWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
    create: XOR<ParentChildCreateWithoutParentInput, ParentChildUncheckedCreateWithoutParentInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutParentInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutParentInput, ParentChildUncheckedUpdateWithoutParentInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutParentInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutParentInput>
  }

  export type ParentChildScalarWhereInput = {
    AND?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    OR?: ParentChildScalarWhereInput[]
    NOT?: ParentChildScalarWhereInput | ParentChildScalarWhereInput[]
    id?: IntFilter<"ParentChild"> | number
    parentId?: IntFilter<"ParentChild"> | number
    childName?: StringFilter<"ParentChild"> | string
    groupId?: IntFilter<"ParentChild"> | number
    relation?: EnumParentRelationFilter<"ParentChild"> | $Enums.ParentRelation
  }

  export type UserCreateWithoutYouthMovementsInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutYouthMovementsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutYouthMovementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutYouthMovementsInput, UserUncheckedCreateWithoutYouthMovementsInput>
  }

  export type YouthMovementCreateWithoutUsersInput = {
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationUncheckedCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementCreateOrConnectWithoutUsersInput = {
    where: YouthMovementWhereUniqueInput
    create: XOR<YouthMovementCreateWithoutUsersInput, YouthMovementUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutYouthMovementsInput = {
    update: XOR<UserUpdateWithoutYouthMovementsInput, UserUncheckedUpdateWithoutYouthMovementsInput>
    create: XOR<UserCreateWithoutYouthMovementsInput, UserUncheckedCreateWithoutYouthMovementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutYouthMovementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutYouthMovementsInput, UserUncheckedUpdateWithoutYouthMovementsInput>
  }

  export type UserUpdateWithoutYouthMovementsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutYouthMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type YouthMovementUpsertWithoutUsersInput = {
    update: XOR<YouthMovementUpdateWithoutUsersInput, YouthMovementUncheckedUpdateWithoutUsersInput>
    create: XOR<YouthMovementCreateWithoutUsersInput, YouthMovementUncheckedCreateWithoutUsersInput>
    where?: YouthMovementWhereInput
  }

  export type YouthMovementUpdateToOneWithWhereWithoutUsersInput = {
    where?: YouthMovementWhereInput
    data: XOR<YouthMovementUpdateWithoutUsersInput, YouthMovementUncheckedUpdateWithoutUsersInput>
  }

  export type YouthMovementUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUncheckedUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementCreateWithoutInvitesInput = {
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutYouthMovementInput
    users?: YouthMovementUserCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementUncheckedCreateWithoutInvitesInput = {
    id?: number
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutYouthMovementInput
    users?: YouthMovementUserUncheckedCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementCreateOrConnectWithoutInvitesInput = {
    where: YouthMovementWhereUniqueInput
    create: XOR<YouthMovementCreateWithoutInvitesInput, YouthMovementUncheckedCreateWithoutInvitesInput>
  }

  export type YouthMovementUpsertWithoutInvitesInput = {
    update: XOR<YouthMovementUpdateWithoutInvitesInput, YouthMovementUncheckedUpdateWithoutInvitesInput>
    create: XOR<YouthMovementCreateWithoutInvitesInput, YouthMovementUncheckedCreateWithoutInvitesInput>
    where?: YouthMovementWhereInput
  }

  export type YouthMovementUpdateToOneWithWhereWithoutInvitesInput = {
    where?: YouthMovementWhereInput
    data: XOR<YouthMovementUpdateWithoutInvitesInput, YouthMovementUncheckedUpdateWithoutInvitesInput>
  }

  export type YouthMovementUpdateWithoutInvitesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutYouthMovementNestedInput
    users?: YouthMovementUserUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementUncheckedUpdateWithoutInvitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutYouthMovementNestedInput
    users?: YouthMovementUserUncheckedUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementCreateWithoutGroupsInput = {
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: YouthMovementUserCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementUncheckedCreateWithoutGroupsInput = {
    id?: number
    name: string
    description?: string | null
    city: string
    postalCode: number
    street: string
    houseNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: YouthMovementUserUncheckedCreateNestedManyWithoutYouthMovementInput
    invites?: InvitationUncheckedCreateNestedManyWithoutYouthMovementInput
  }

  export type YouthMovementCreateOrConnectWithoutGroupsInput = {
    where: YouthMovementWhereUniqueInput
    create: XOR<YouthMovementCreateWithoutGroupsInput, YouthMovementUncheckedCreateWithoutGroupsInput>
  }

  export type PostCreateWithoutGroupInput = {
    title: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    user: UserCreateNestedOneWithoutPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutGroupInput = {
    id?: number
    title: string
    body: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutGroupInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput>
  }

  export type PostCreateManyGroupInputEnvelope = {
    data: PostCreateManyGroupInput | PostCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutGroupInput = {
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    attendees?: AttendeeCreateNestedManyWithoutEventInput
    volunteers?: VolunteerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    attendees?: AttendeeUncheckedCreateNestedManyWithoutEventInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGroupInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
  }

  export type EventCreateManyGroupInputEnvelope = {
    data: EventCreateManyGroupInput | EventCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type LeadersGroupCreateWithoutGroupInput = {
    user: UserCreateNestedOneWithoutLeadersGroupsInput
  }

  export type LeadersGroupUncheckedCreateWithoutGroupInput = {
    id?: number
    userId: number
  }

  export type LeadersGroupCreateOrConnectWithoutGroupInput = {
    where: LeadersGroupWhereUniqueInput
    create: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput>
  }

  export type LeadersGroupCreateManyGroupInputEnvelope = {
    data: LeadersGroupCreateManyGroupInput | LeadersGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ParentChildCreateWithoutGroupInput = {
    childName: string
    relation: $Enums.ParentRelation
    parent: UserCreateNestedOneWithoutParentChildInput
  }

  export type ParentChildUncheckedCreateWithoutGroupInput = {
    id?: number
    parentId: number
    childName: string
    relation: $Enums.ParentRelation
  }

  export type ParentChildCreateOrConnectWithoutGroupInput = {
    where: ParentChildWhereUniqueInput
    create: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput>
  }

  export type ParentChildCreateManyGroupInputEnvelope = {
    data: ParentChildCreateManyGroupInput | ParentChildCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type YouthMovementUpsertWithoutGroupsInput = {
    update: XOR<YouthMovementUpdateWithoutGroupsInput, YouthMovementUncheckedUpdateWithoutGroupsInput>
    create: XOR<YouthMovementCreateWithoutGroupsInput, YouthMovementUncheckedCreateWithoutGroupsInput>
    where?: YouthMovementWhereInput
  }

  export type YouthMovementUpdateToOneWithWhereWithoutGroupsInput = {
    where?: YouthMovementWhereInput
    data: XOR<YouthMovementUpdateWithoutGroupsInput, YouthMovementUncheckedUpdateWithoutGroupsInput>
  }

  export type YouthMovementUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: YouthMovementUserUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUpdateManyWithoutYouthMovementNestedInput
  }

  export type YouthMovementUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: YouthMovementUserUncheckedUpdateManyWithoutYouthMovementNestedInput
    invites?: InvitationUncheckedUpdateManyWithoutYouthMovementNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutGroupInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutGroupInput, PostUncheckedUpdateWithoutGroupInput>
    create: XOR<PostCreateWithoutGroupInput, PostUncheckedCreateWithoutGroupInput>
  }

  export type PostUpdateWithWhereUniqueWithoutGroupInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutGroupInput, PostUncheckedUpdateWithoutGroupInput>
  }

  export type PostUpdateManyWithWhereWithoutGroupInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutGroupInput>
  }

  export type EventUpsertWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
  }

  export type EventUpdateWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
  }

  export type EventUpdateManyWithWhereWithoutGroupInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutGroupInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    body?: StringFilter<"Event"> | string
    image?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    signUp?: BoolFilter<"Event"> | boolean
    volunteer?: BoolFilter<"Event"> | boolean
    groupId?: IntNullableFilter<"Event"> | number | null
  }

  export type LeadersGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: LeadersGroupWhereUniqueInput
    update: XOR<LeadersGroupUpdateWithoutGroupInput, LeadersGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<LeadersGroupCreateWithoutGroupInput, LeadersGroupUncheckedCreateWithoutGroupInput>
  }

  export type LeadersGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: LeadersGroupWhereUniqueInput
    data: XOR<LeadersGroupUpdateWithoutGroupInput, LeadersGroupUncheckedUpdateWithoutGroupInput>
  }

  export type LeadersGroupUpdateManyWithWhereWithoutGroupInput = {
    where: LeadersGroupScalarWhereInput
    data: XOR<LeadersGroupUpdateManyMutationInput, LeadersGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type ParentChildUpsertWithWhereUniqueWithoutGroupInput = {
    where: ParentChildWhereUniqueInput
    update: XOR<ParentChildUpdateWithoutGroupInput, ParentChildUncheckedUpdateWithoutGroupInput>
    create: XOR<ParentChildCreateWithoutGroupInput, ParentChildUncheckedCreateWithoutGroupInput>
  }

  export type ParentChildUpdateWithWhereUniqueWithoutGroupInput = {
    where: ParentChildWhereUniqueInput
    data: XOR<ParentChildUpdateWithoutGroupInput, ParentChildUncheckedUpdateWithoutGroupInput>
  }

  export type ParentChildUpdateManyWithWhereWithoutGroupInput = {
    where: ParentChildScalarWhereInput
    data: XOR<ParentChildUpdateManyMutationInput, ParentChildUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutPostsInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type GroupCreateWithoutPostsInput = {
    name: string
    minimumAge: number
    maximumAge: number
    youthMovement: YouthMovementCreateNestedOneWithoutGroupsInput
    events?: EventCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutPostsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutPostsInput, GroupUncheckedCreateWithoutPostsInput>
  }

  export type PostLikeCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeCreateManyPostInputEnvelope = {
    data: PostLikeCreateManyPostInput | PostLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type GroupUpsertWithoutPostsInput = {
    update: XOR<GroupUpdateWithoutPostsInput, GroupUncheckedUpdateWithoutPostsInput>
    create: XOR<GroupCreateWithoutPostsInput, GroupUncheckedCreateWithoutPostsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutPostsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutPostsInput, GroupUncheckedUpdateWithoutPostsInput>
  }

  export type GroupUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovement?: YouthMovementUpdateOneRequiredWithoutGroupsNestedInput
    events?: EventUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PostLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutPostInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutLikesInput = {
    title: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
    user: UserCreateNestedOneWithoutPostsInput
    group?: GroupCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: number
    title: string
    body: string
    userId: number
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutPostLikesInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    group?: GroupUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserUpdateWithoutPostLikesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type GroupCreateWithoutEventsInput = {
    name: string
    minimumAge: number
    maximumAge: number
    youthMovement: YouthMovementCreateNestedOneWithoutGroupsInput
    posts?: PostCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutEventsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
  }

  export type AttendeeCreateWithoutEventInput = {
    user: UserCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
  }

  export type AttendeeCreateOrConnectWithoutEventInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput>
  }

  export type AttendeeCreateManyEventInputEnvelope = {
    data: AttendeeCreateManyEventInput | AttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerCreateWithoutEventInput = {
    user: UserCreateNestedOneWithoutVolunteersInput
  }

  export type VolunteerUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
  }

  export type VolunteerCreateOrConnectWithoutEventInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput>
  }

  export type VolunteerCreateManyEventInputEnvelope = {
    data: VolunteerCreateManyEventInput | VolunteerCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutEventsInput = {
    update: XOR<GroupUpdateWithoutEventsInput, GroupUncheckedUpdateWithoutEventsInput>
    create: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutEventsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutEventsInput, GroupUncheckedUpdateWithoutEventsInput>
  }

  export type GroupUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovement?: YouthMovementUpdateOneRequiredWithoutGroupsNestedInput
    posts?: PostUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type AttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutEventInput, AttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<AttendeeCreateWithoutEventInput, AttendeeUncheckedCreateWithoutEventInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutEventInput, AttendeeUncheckedUpdateWithoutEventInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutEventInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type VolunteerUpsertWithWhereUniqueWithoutEventInput = {
    where: VolunteerWhereUniqueInput
    update: XOR<VolunteerUpdateWithoutEventInput, VolunteerUncheckedUpdateWithoutEventInput>
    create: XOR<VolunteerCreateWithoutEventInput, VolunteerUncheckedCreateWithoutEventInput>
  }

  export type VolunteerUpdateWithWhereUniqueWithoutEventInput = {
    where: VolunteerWhereUniqueInput
    data: XOR<VolunteerUpdateWithoutEventInput, VolunteerUncheckedUpdateWithoutEventInput>
  }

  export type VolunteerUpdateManyWithWhereWithoutEventInput = {
    where: VolunteerScalarWhereInput
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutAttendeesInput = {
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    group?: GroupCreateNestedOneWithoutEventsInput
    volunteers?: VolunteerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    groupId?: number | null
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type UserCreateWithoutAttendeesInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutAttendeesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutAttendeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
  }

  export type EventUpsertWithoutAttendeesInput = {
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateWithoutAttendeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneWithoutEventsNestedInput
    volunteers?: VolunteerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    volunteers?: VolunteerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutAttendeesInput = {
    update: XOR<UserUpdateWithoutAttendeesInput, UserUncheckedUpdateWithoutAttendeesInput>
    create: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendeesInput, UserUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateWithoutAttendeesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type EventCreateWithoutVolunteersInput = {
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    group?: GroupCreateNestedOneWithoutEventsInput
    attendees?: AttendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVolunteersInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
    groupId?: number | null
    attendees?: AttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVolunteersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
  }

  export type UserCreateWithoutVolunteersInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutVolunteersInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutVolunteersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteersInput, UserUncheckedCreateWithoutVolunteersInput>
  }

  export type EventUpsertWithoutVolunteersInput = {
    update: XOR<EventUpdateWithoutVolunteersInput, EventUncheckedUpdateWithoutVolunteersInput>
    create: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVolunteersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVolunteersInput, EventUncheckedUpdateWithoutVolunteersInput>
  }

  export type EventUpdateWithoutVolunteersInput = {
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneWithoutEventsNestedInput
    attendees?: AttendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    attendees?: AttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutVolunteersInput = {
    update: XOR<UserUpdateWithoutVolunteersInput, UserUncheckedUpdateWithoutVolunteersInput>
    create: XOR<UserCreateWithoutVolunteersInput, UserUncheckedCreateWithoutVolunteersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteersInput, UserUncheckedUpdateWithoutVolunteersInput>
  }

  export type UserUpdateWithoutVolunteersInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutLeadersGroupsInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutLeadersGroupsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutLeadersGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadersGroupsInput, UserUncheckedCreateWithoutLeadersGroupsInput>
  }

  export type GroupCreateWithoutLeadersGroupsInput = {
    name: string
    minimumAge: number
    maximumAge: number
    youthMovement: YouthMovementCreateNestedOneWithoutGroupsInput
    posts?: PostCreateNestedManyWithoutGroupInput
    events?: EventCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutLeadersGroupsInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutLeadersGroupsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutLeadersGroupsInput, GroupUncheckedCreateWithoutLeadersGroupsInput>
  }

  export type UserUpsertWithoutLeadersGroupsInput = {
    update: XOR<UserUpdateWithoutLeadersGroupsInput, UserUncheckedUpdateWithoutLeadersGroupsInput>
    create: XOR<UserCreateWithoutLeadersGroupsInput, UserUncheckedCreateWithoutLeadersGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadersGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadersGroupsInput, UserUncheckedUpdateWithoutLeadersGroupsInput>
  }

  export type UserUpdateWithoutLeadersGroupsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadersGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type GroupUpsertWithoutLeadersGroupsInput = {
    update: XOR<GroupUpdateWithoutLeadersGroupsInput, GroupUncheckedUpdateWithoutLeadersGroupsInput>
    create: XOR<GroupCreateWithoutLeadersGroupsInput, GroupUncheckedCreateWithoutLeadersGroupsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutLeadersGroupsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutLeadersGroupsInput, GroupUncheckedUpdateWithoutLeadersGroupsInput>
  }

  export type GroupUpdateWithoutLeadersGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovement?: YouthMovementUpdateOneRequiredWithoutGroupsNestedInput
    posts?: PostUpdateManyWithoutGroupNestedInput
    events?: EventUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutLeadersGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutGroupNestedInput
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutParentChildInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentChildInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentChildInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentChildInput, UserUncheckedCreateWithoutParentChildInput>
  }

  export type GroupCreateWithoutParentChildInput = {
    name: string
    minimumAge: number
    maximumAge: number
    youthMovement: YouthMovementCreateNestedOneWithoutGroupsInput
    posts?: PostCreateNestedManyWithoutGroupInput
    events?: EventCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutParentChildInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
    youthMovementId: number
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutParentChildInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutParentChildInput, GroupUncheckedCreateWithoutParentChildInput>
  }

  export type UserUpsertWithoutParentChildInput = {
    update: XOR<UserUpdateWithoutParentChildInput, UserUncheckedUpdateWithoutParentChildInput>
    create: XOR<UserCreateWithoutParentChildInput, UserUncheckedCreateWithoutParentChildInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentChildInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentChildInput, UserUncheckedUpdateWithoutParentChildInput>
  }

  export type UserUpdateWithoutParentChildInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentChildInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutParentChildInput = {
    update: XOR<GroupUpdateWithoutParentChildInput, GroupUncheckedUpdateWithoutParentChildInput>
    create: XOR<GroupCreateWithoutParentChildInput, GroupUncheckedCreateWithoutParentChildInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutParentChildInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutParentChildInput, GroupUncheckedUpdateWithoutParentChildInput>
  }

  export type GroupUpdateWithoutParentChildInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovement?: YouthMovementUpdateOneRequiredWithoutGroupsNestedInput
    posts?: PostUpdateManyWithoutGroupNestedInput
    events?: EventUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutParentChildInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutGroupNestedInput
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
    volunteers?: VolunteerCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupCreateNestedManyWithoutUserInput
    parentChild?: ParentChildCreateNestedManyWithoutParentInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    cognitoId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    youthMovements?: YouthMovementUserUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
    volunteers?: VolunteerUncheckedCreateNestedManyWithoutUserInput
    leadersGroups?: LeadersGroupUncheckedCreateNestedManyWithoutUserInput
    parentChild?: ParentChildUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUpdateManyWithoutParentNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cognitoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youthMovements?: YouthMovementUserUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutUserNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutUserNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutParentNestedInput
  }

  export type GroupCreateManyYouthMovementInput = {
    id?: number
    name: string
    minimumAge: number
    maximumAge: number
  }

  export type YouthMovementUserCreateManyYouthMovementInput = {
    id?: number
    userId: number
    role: $Enums.Role
  }

  export type InvitationCreateManyYouthMovementInput = {
    id?: number
    email: string
    role: $Enums.Role
    code: string
    used?: boolean
    sentAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type GroupUpdateWithoutYouthMovementInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    posts?: PostUpdateManyWithoutGroupNestedInput
    events?: EventUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutGroupNestedInput
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    leadersGroups?: LeadersGroupUncheckedUpdateManyWithoutGroupNestedInput
    parentChild?: ParentChildUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumAge?: IntFieldUpdateOperationsInput | number
    maximumAge?: IntFieldUpdateOperationsInput | number
  }

  export type YouthMovementUserUpdateWithoutYouthMovementInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutYouthMovementsNestedInput
  }

  export type YouthMovementUserUncheckedUpdateWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type YouthMovementUserUncheckedUpdateManyWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type InvitationUpdateWithoutYouthMovementInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutYouthMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type YouthMovementUserCreateManyUserInput = {
    id?: number
    youthMovementId: number
    role: $Enums.Role
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    body: string
    groupId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
  }

  export type PostLikeCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    receiverId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    senderId: number
    message: string
    sentAt?: Date | string
    readAt?: Date | string | null
  }

  export type AttendeeCreateManyUserInput = {
    id?: number
    eventId: number
  }

  export type VolunteerCreateManyUserInput = {
    id?: number
    eventId: number
  }

  export type LeadersGroupCreateManyUserInput = {
    id?: number
    groupId: number
  }

  export type ParentChildCreateManyParentInput = {
    id?: number
    childName: string
    groupId: number
    relation: $Enums.ParentRelation
  }

  export type YouthMovementUserUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    youthMovement?: YouthMovementUpdateOneRequiredWithoutUsersNestedInput
  }

  export type YouthMovementUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type YouthMovementUserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    youthMovementId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    group?: GroupUpdateOneWithoutPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutReceiverInput = {
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendeeUpdateWithoutUserInput = {
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUpdateWithoutUserInput = {
    event?: EventUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadersGroupUpdateWithoutUserInput = {
    group?: GroupUpdateOneRequiredWithoutLeadersGroupsNestedInput
  }

  export type LeadersGroupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadersGroupUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildUpdateWithoutParentInput = {
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
    group?: GroupUpdateOneRequiredWithoutParentChildNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type ParentChildUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type PostCreateManyGroupInput = {
    id?: number
    title: string
    body: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    amountOfComments?: number
  }

  export type EventCreateManyGroupInput = {
    id?: number
    name: string
    body: string
    image?: string | null
    type: string
    eventDate: Date | string
    location?: string | null
    signUp?: boolean
    volunteer?: boolean
  }

  export type LeadersGroupCreateManyGroupInput = {
    id?: number
    userId: number
  }

  export type ParentChildCreateManyGroupInput = {
    id?: number
    parentId: number
    childName: string
    relation: $Enums.ParentRelation
  }

  export type PostUpdateWithoutGroupInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    amountOfComments?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    attendees?: AttendeeUpdateManyWithoutEventNestedInput
    volunteers?: VolunteerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
    attendees?: AttendeeUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: VolunteerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    signUp?: BoolFieldUpdateOperationsInput | boolean
    volunteer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadersGroupUpdateWithoutGroupInput = {
    user?: UserUpdateOneRequiredWithoutLeadersGroupsNestedInput
  }

  export type LeadersGroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadersGroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParentChildUpdateWithoutGroupInput = {
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
    parent?: UserUpdateOneRequiredWithoutParentChildNestedInput
  }

  export type ParentChildUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type ParentChildUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    childName?: StringFieldUpdateOperationsInput | string
    relation?: EnumParentRelationFieldUpdateOperationsInput | $Enums.ParentRelation
  }

  export type PostLikeCreateManyPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type PostLikeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeCreateManyEventInput = {
    id?: number
    userId: number
  }

  export type VolunteerCreateManyEventInput = {
    id?: number
    userId: number
  }

  export type AttendeeUpdateWithoutEventInput = {
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendeeUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUpdateWithoutEventInput = {
    user?: UserUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}