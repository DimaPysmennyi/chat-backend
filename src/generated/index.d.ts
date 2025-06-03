
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserAlbum
 * 
 */
export type UserAlbum = $Result.DefaultSelection<Prisma.$UserAlbumPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model UserPost
 * 
 */
export type UserPost = $Result.DefaultSelection<Prisma.$UserPostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserAlbums
 * const userAlbums = await prisma.userAlbum.findMany()
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
   * // Fetch zero or more UserAlbums
   * const userAlbums = await prisma.userAlbum.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userAlbum`: Exposes CRUD operations for the **UserAlbum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAlbums
    * const userAlbums = await prisma.userAlbum.findMany()
    * ```
    */
  get userAlbum(): Prisma.UserAlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPost`: Exposes CRUD operations for the **UserPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPosts
    * const userPosts = await prisma.userPost.findMany()
    * ```
    */
  get userPost(): Prisma.UserPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UserAlbum: 'UserAlbum',
    Friend: 'Friend',
    UserPost: 'UserPost',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userAlbum" | "friend" | "userPost" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserAlbum: {
        payload: Prisma.$UserAlbumPayload<ExtArgs>
        fields: Prisma.UserAlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          findFirst: {
            args: Prisma.UserAlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          findMany: {
            args: Prisma.UserAlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>[]
          }
          create: {
            args: Prisma.UserAlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          createMany: {
            args: Prisma.UserAlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>[]
          }
          delete: {
            args: Prisma.UserAlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          update: {
            args: Prisma.UserAlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          deleteMany: {
            args: Prisma.UserAlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>[]
          }
          upsert: {
            args: Prisma.UserAlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAlbumPayload>
          }
          aggregate: {
            args: Prisma.UserAlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAlbum>
          }
          groupBy: {
            args: Prisma.UserAlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAlbumCountArgs<ExtArgs>
            result: $Utils.Optional<UserAlbumCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      UserPost: {
        payload: Prisma.$UserPostPayload<ExtArgs>
        fields: Prisma.UserPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          findFirst: {
            args: Prisma.UserPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          findMany: {
            args: Prisma.UserPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          create: {
            args: Prisma.UserPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          createMany: {
            args: Prisma.UserPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          delete: {
            args: Prisma.UserPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          update: {
            args: Prisma.UserPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          deleteMany: {
            args: Prisma.UserPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>[]
          }
          upsert: {
            args: Prisma.UserPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPostPayload>
          }
          aggregate: {
            args: Prisma.UserPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPost>
          }
          groupBy: {
            args: Prisma.UserPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPostCountArgs<ExtArgs>
            result: $Utils.Optional<UserPostCountAggregateOutputType> | number
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
    userAlbum?: UserAlbumOmit
    friend?: FriendOmit
    userPost?: UserPostOmit
    user?: UserOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    albums: number
    friendOf: number
    friends: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    albums?: boolean | UserCountOutputTypeCountAlbumsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAlbumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserAlbum
   */

  export type AggregateUserAlbum = {
    _count: UserAlbumCountAggregateOutputType | null
    _avg: UserAlbumAvgAggregateOutputType | null
    _sum: UserAlbumSumAggregateOutputType | null
    _min: UserAlbumMinAggregateOutputType | null
    _max: UserAlbumMaxAggregateOutputType | null
  }

  export type UserAlbumAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAlbumSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAlbumMinAggregateOutputType = {
    id: number | null
    src: string | null
    userId: number | null
  }

  export type UserAlbumMaxAggregateOutputType = {
    id: number | null
    src: string | null
    userId: number | null
  }

  export type UserAlbumCountAggregateOutputType = {
    id: number
    src: number
    userId: number
    _all: number
  }


  export type UserAlbumAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAlbumSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAlbumMinAggregateInputType = {
    id?: true
    src?: true
    userId?: true
  }

  export type UserAlbumMaxAggregateInputType = {
    id?: true
    src?: true
    userId?: true
  }

  export type UserAlbumCountAggregateInputType = {
    id?: true
    src?: true
    userId?: true
    _all?: true
  }

  export type UserAlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAlbum to aggregate.
     */
    where?: UserAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAlbums to fetch.
     */
    orderBy?: UserAlbumOrderByWithRelationInput | UserAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAlbums
    **/
    _count?: true | UserAlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAlbumMaxAggregateInputType
  }

  export type GetUserAlbumAggregateType<T extends UserAlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAlbum[P]>
      : GetScalarType<T[P], AggregateUserAlbum[P]>
  }




  export type UserAlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAlbumWhereInput
    orderBy?: UserAlbumOrderByWithAggregationInput | UserAlbumOrderByWithAggregationInput[]
    by: UserAlbumScalarFieldEnum[] | UserAlbumScalarFieldEnum
    having?: UserAlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAlbumCountAggregateInputType | true
    _avg?: UserAlbumAvgAggregateInputType
    _sum?: UserAlbumSumAggregateInputType
    _min?: UserAlbumMinAggregateInputType
    _max?: UserAlbumMaxAggregateInputType
  }

  export type UserAlbumGroupByOutputType = {
    id: number
    src: string
    userId: number
    _count: UserAlbumCountAggregateOutputType | null
    _avg: UserAlbumAvgAggregateOutputType | null
    _sum: UserAlbumSumAggregateOutputType | null
    _min: UserAlbumMinAggregateOutputType | null
    _max: UserAlbumMaxAggregateOutputType | null
  }

  type GetUserAlbumGroupByPayload<T extends UserAlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAlbumGroupByOutputType[P]>
            : GetScalarType<T[P], UserAlbumGroupByOutputType[P]>
        }
      >
    >


  export type UserAlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAlbum"]>

  export type UserAlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAlbum"]>

  export type UserAlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAlbum"]>

  export type UserAlbumSelectScalar = {
    id?: boolean
    src?: boolean
    userId?: boolean
  }

  export type UserAlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "userId", ExtArgs["result"]["userAlbum"]>
  export type UserAlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAlbum"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string
      userId: number
    }, ExtArgs["result"]["userAlbum"]>
    composites: {}
  }

  type UserAlbumGetPayload<S extends boolean | null | undefined | UserAlbumDefaultArgs> = $Result.GetResult<Prisma.$UserAlbumPayload, S>

  type UserAlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAlbumCountAggregateInputType | true
    }

  export interface UserAlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAlbum'], meta: { name: 'UserAlbum' } }
    /**
     * Find zero or one UserAlbum that matches the filter.
     * @param {UserAlbumFindUniqueArgs} args - Arguments to find a UserAlbum
     * @example
     * // Get one UserAlbum
     * const userAlbum = await prisma.userAlbum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAlbumFindUniqueArgs>(args: SelectSubset<T, UserAlbumFindUniqueArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAlbum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAlbumFindUniqueOrThrowArgs} args - Arguments to find a UserAlbum
     * @example
     * // Get one UserAlbum
     * const userAlbum = await prisma.userAlbum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAlbum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumFindFirstArgs} args - Arguments to find a UserAlbum
     * @example
     * // Get one UserAlbum
     * const userAlbum = await prisma.userAlbum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAlbumFindFirstArgs>(args?: SelectSubset<T, UserAlbumFindFirstArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAlbum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumFindFirstOrThrowArgs} args - Arguments to find a UserAlbum
     * @example
     * // Get one UserAlbum
     * const userAlbum = await prisma.userAlbum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAlbums
     * const userAlbums = await prisma.userAlbum.findMany()
     * 
     * // Get first 10 UserAlbums
     * const userAlbums = await prisma.userAlbum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAlbumWithIdOnly = await prisma.userAlbum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAlbumFindManyArgs>(args?: SelectSubset<T, UserAlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAlbum.
     * @param {UserAlbumCreateArgs} args - Arguments to create a UserAlbum.
     * @example
     * // Create one UserAlbum
     * const UserAlbum = await prisma.userAlbum.create({
     *   data: {
     *     // ... data to create a UserAlbum
     *   }
     * })
     * 
     */
    create<T extends UserAlbumCreateArgs>(args: SelectSubset<T, UserAlbumCreateArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAlbums.
     * @param {UserAlbumCreateManyArgs} args - Arguments to create many UserAlbums.
     * @example
     * // Create many UserAlbums
     * const userAlbum = await prisma.userAlbum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAlbumCreateManyArgs>(args?: SelectSubset<T, UserAlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAlbums and returns the data saved in the database.
     * @param {UserAlbumCreateManyAndReturnArgs} args - Arguments to create many UserAlbums.
     * @example
     * // Create many UserAlbums
     * const userAlbum = await prisma.userAlbum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAlbums and only return the `id`
     * const userAlbumWithIdOnly = await prisma.userAlbum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAlbum.
     * @param {UserAlbumDeleteArgs} args - Arguments to delete one UserAlbum.
     * @example
     * // Delete one UserAlbum
     * const UserAlbum = await prisma.userAlbum.delete({
     *   where: {
     *     // ... filter to delete one UserAlbum
     *   }
     * })
     * 
     */
    delete<T extends UserAlbumDeleteArgs>(args: SelectSubset<T, UserAlbumDeleteArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAlbum.
     * @param {UserAlbumUpdateArgs} args - Arguments to update one UserAlbum.
     * @example
     * // Update one UserAlbum
     * const userAlbum = await prisma.userAlbum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAlbumUpdateArgs>(args: SelectSubset<T, UserAlbumUpdateArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAlbums.
     * @param {UserAlbumDeleteManyArgs} args - Arguments to filter UserAlbums to delete.
     * @example
     * // Delete a few UserAlbums
     * const { count } = await prisma.userAlbum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAlbumDeleteManyArgs>(args?: SelectSubset<T, UserAlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAlbums
     * const userAlbum = await prisma.userAlbum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAlbumUpdateManyArgs>(args: SelectSubset<T, UserAlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAlbums and returns the data updated in the database.
     * @param {UserAlbumUpdateManyAndReturnArgs} args - Arguments to update many UserAlbums.
     * @example
     * // Update many UserAlbums
     * const userAlbum = await prisma.userAlbum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAlbums and only return the `id`
     * const userAlbumWithIdOnly = await prisma.userAlbum.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAlbum.
     * @param {UserAlbumUpsertArgs} args - Arguments to update or create a UserAlbum.
     * @example
     * // Update or create a UserAlbum
     * const userAlbum = await prisma.userAlbum.upsert({
     *   create: {
     *     // ... data to create a UserAlbum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAlbum we want to update
     *   }
     * })
     */
    upsert<T extends UserAlbumUpsertArgs>(args: SelectSubset<T, UserAlbumUpsertArgs<ExtArgs>>): Prisma__UserAlbumClient<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumCountArgs} args - Arguments to filter UserAlbums to count.
     * @example
     * // Count the number of UserAlbums
     * const count = await prisma.userAlbum.count({
     *   where: {
     *     // ... the filter for the UserAlbums we want to count
     *   }
     * })
    **/
    count<T extends UserAlbumCountArgs>(
      args?: Subset<T, UserAlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAlbumAggregateArgs>(args: Subset<T, UserAlbumAggregateArgs>): Prisma.PrismaPromise<GetUserAlbumAggregateType<T>>

    /**
     * Group by UserAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAlbumGroupByArgs} args - Group by arguments.
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
      T extends UserAlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAlbumGroupByArgs['orderBy'] }
        : { orderBy?: UserAlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAlbum model
   */
  readonly fields: UserAlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAlbum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAlbum model
   */
  interface UserAlbumFieldRefs {
    readonly id: FieldRef<"UserAlbum", 'Int'>
    readonly src: FieldRef<"UserAlbum", 'String'>
    readonly userId: FieldRef<"UserAlbum", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAlbum findUnique
   */
  export type UserAlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter, which UserAlbum to fetch.
     */
    where: UserAlbumWhereUniqueInput
  }

  /**
   * UserAlbum findUniqueOrThrow
   */
  export type UserAlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter, which UserAlbum to fetch.
     */
    where: UserAlbumWhereUniqueInput
  }

  /**
   * UserAlbum findFirst
   */
  export type UserAlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter, which UserAlbum to fetch.
     */
    where?: UserAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAlbums to fetch.
     */
    orderBy?: UserAlbumOrderByWithRelationInput | UserAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAlbums.
     */
    cursor?: UserAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAlbums.
     */
    distinct?: UserAlbumScalarFieldEnum | UserAlbumScalarFieldEnum[]
  }

  /**
   * UserAlbum findFirstOrThrow
   */
  export type UserAlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter, which UserAlbum to fetch.
     */
    where?: UserAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAlbums to fetch.
     */
    orderBy?: UserAlbumOrderByWithRelationInput | UserAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAlbums.
     */
    cursor?: UserAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAlbums.
     */
    distinct?: UserAlbumScalarFieldEnum | UserAlbumScalarFieldEnum[]
  }

  /**
   * UserAlbum findMany
   */
  export type UserAlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter, which UserAlbums to fetch.
     */
    where?: UserAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAlbums to fetch.
     */
    orderBy?: UserAlbumOrderByWithRelationInput | UserAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAlbums.
     */
    cursor?: UserAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAlbums.
     */
    skip?: number
    distinct?: UserAlbumScalarFieldEnum | UserAlbumScalarFieldEnum[]
  }

  /**
   * UserAlbum create
   */
  export type UserAlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAlbum.
     */
    data: XOR<UserAlbumCreateInput, UserAlbumUncheckedCreateInput>
  }

  /**
   * UserAlbum createMany
   */
  export type UserAlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAlbums.
     */
    data: UserAlbumCreateManyInput | UserAlbumCreateManyInput[]
  }

  /**
   * UserAlbum createManyAndReturn
   */
  export type UserAlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * The data used to create many UserAlbums.
     */
    data: UserAlbumCreateManyInput | UserAlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAlbum update
   */
  export type UserAlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAlbum.
     */
    data: XOR<UserAlbumUpdateInput, UserAlbumUncheckedUpdateInput>
    /**
     * Choose, which UserAlbum to update.
     */
    where: UserAlbumWhereUniqueInput
  }

  /**
   * UserAlbum updateMany
   */
  export type UserAlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAlbums.
     */
    data: XOR<UserAlbumUpdateManyMutationInput, UserAlbumUncheckedUpdateManyInput>
    /**
     * Filter which UserAlbums to update
     */
    where?: UserAlbumWhereInput
    /**
     * Limit how many UserAlbums to update.
     */
    limit?: number
  }

  /**
   * UserAlbum updateManyAndReturn
   */
  export type UserAlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * The data used to update UserAlbums.
     */
    data: XOR<UserAlbumUpdateManyMutationInput, UserAlbumUncheckedUpdateManyInput>
    /**
     * Filter which UserAlbums to update
     */
    where?: UserAlbumWhereInput
    /**
     * Limit how many UserAlbums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAlbum upsert
   */
  export type UserAlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAlbum to update in case it exists.
     */
    where: UserAlbumWhereUniqueInput
    /**
     * In case the UserAlbum found by the `where` argument doesn't exist, create a new UserAlbum with this data.
     */
    create: XOR<UserAlbumCreateInput, UserAlbumUncheckedCreateInput>
    /**
     * In case the UserAlbum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAlbumUpdateInput, UserAlbumUncheckedUpdateInput>
  }

  /**
   * UserAlbum delete
   */
  export type UserAlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    /**
     * Filter which UserAlbum to delete.
     */
    where: UserAlbumWhereUniqueInput
  }

  /**
   * UserAlbum deleteMany
   */
  export type UserAlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAlbums to delete
     */
    where?: UserAlbumWhereInput
    /**
     * Limit how many UserAlbums to delete.
     */
    limit?: number
  }

  /**
   * UserAlbum without action
   */
  export type UserAlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    id: number | null
    friendUserId: number | null
    friendOfId: number | null
  }

  export type FriendSumAggregateOutputType = {
    id: number | null
    friendUserId: number | null
    friendOfId: number | null
  }

  export type FriendMinAggregateOutputType = {
    id: number | null
    friendUserId: number | null
    friendOfId: number | null
  }

  export type FriendMaxAggregateOutputType = {
    id: number | null
    friendUserId: number | null
    friendOfId: number | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    friendUserId: number
    friendOfId: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    id?: true
    friendUserId?: true
    friendOfId?: true
  }

  export type FriendSumAggregateInputType = {
    id?: true
    friendUserId?: true
    friendOfId?: true
  }

  export type FriendMinAggregateInputType = {
    id?: true
    friendUserId?: true
    friendOfId?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    friendUserId?: true
    friendOfId?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    friendUserId?: true
    friendOfId?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: number
    friendUserId: number
    friendOfId: number
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendUserId?: boolean
    friendOfId?: boolean
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendUserId?: boolean
    friendOfId?: boolean
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    friendUserId?: boolean
    friendOfId?: boolean
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    id?: boolean
    friendUserId?: boolean
    friendOfId?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "friendUserId" | "friendOfId", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friendUser?: boolean | UserDefaultArgs<ExtArgs>
    friendOf?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      friendUser: Prisma.$UserPayload<ExtArgs>
      friendOf: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      friendUserId: number
      friendOfId: number
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
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
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friendUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friendOf<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'Int'>
    readonly friendUserId: FieldRef<"Friend", 'Int'>
    readonly friendOfId: FieldRef<"Friend", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
  }

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model UserPost
   */

  export type AggregateUserPost = {
    _count: UserPostCountAggregateOutputType | null
    _avg: UserPostAvgAggregateOutputType | null
    _sum: UserPostSumAggregateOutputType | null
    _min: UserPostMinAggregateOutputType | null
    _max: UserPostMaxAggregateOutputType | null
  }

  export type UserPostAvgAggregateOutputType = {
    id: number | null
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type UserPostSumAggregateOutputType = {
    id: number | null
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type UserPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    topic: string | null
    tags: string | null
    content: string | null
    links: string | null
    images: string | null
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type UserPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    topic: string | null
    tags: string | null
    content: string | null
    links: string | null
    images: string | null
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type UserPostCountAggregateOutputType = {
    id: number
    title: number
    topic: number
    tags: number
    content: number
    links: number
    images: number
    views: number
    likes: number
    userId: number
    _all: number
  }


  export type UserPostAvgAggregateInputType = {
    id?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type UserPostSumAggregateInputType = {
    id?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type UserPostMinAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    links?: true
    images?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type UserPostMaxAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    links?: true
    images?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type UserPostCountAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    links?: true
    images?: true
    views?: true
    likes?: true
    userId?: true
    _all?: true
  }

  export type UserPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPost to aggregate.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPosts
    **/
    _count?: true | UserPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPostMaxAggregateInputType
  }

  export type GetUserPostAggregateType<T extends UserPostAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPost[P]>
      : GetScalarType<T[P], AggregateUserPost[P]>
  }




  export type UserPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithAggregationInput | UserPostOrderByWithAggregationInput[]
    by: UserPostScalarFieldEnum[] | UserPostScalarFieldEnum
    having?: UserPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPostCountAggregateInputType | true
    _avg?: UserPostAvgAggregateInputType
    _sum?: UserPostSumAggregateInputType
    _min?: UserPostMinAggregateInputType
    _max?: UserPostMaxAggregateInputType
  }

  export type UserPostGroupByOutputType = {
    id: number
    title: string
    topic: string | null
    tags: string | null
    content: string
    links: string | null
    images: string | null
    views: number
    likes: number
    userId: number
    _count: UserPostCountAggregateOutputType | null
    _avg: UserPostAvgAggregateOutputType | null
    _sum: UserPostSumAggregateOutputType | null
    _min: UserPostMinAggregateOutputType | null
    _max: UserPostMaxAggregateOutputType | null
  }

  type GetUserPostGroupByPayload<T extends UserPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPostGroupByOutputType[P]>
            : GetScalarType<T[P], UserPostGroupByOutputType[P]>
        }
      >
    >


  export type UserPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    links?: boolean
    images?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    links?: boolean
    images?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    links?: boolean
    images?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPost"]>

  export type UserPostSelectScalar = {
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    links?: boolean
    images?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
  }

  export type UserPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "topic" | "tags" | "content" | "links" | "images" | "views" | "likes" | "userId", ExtArgs["result"]["userPost"]>
  export type UserPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      topic: string | null
      tags: string | null
      content: string
      links: string | null
      images: string | null
      views: number
      likes: number
      userId: number
    }, ExtArgs["result"]["userPost"]>
    composites: {}
  }

  type UserPostGetPayload<S extends boolean | null | undefined | UserPostDefaultArgs> = $Result.GetResult<Prisma.$UserPostPayload, S>

  type UserPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPostCountAggregateInputType | true
    }

  export interface UserPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPost'], meta: { name: 'UserPost' } }
    /**
     * Find zero or one UserPost that matches the filter.
     * @param {UserPostFindUniqueArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPostFindUniqueArgs>(args: SelectSubset<T, UserPostFindUniqueArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPostFindUniqueOrThrowArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPostFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindFirstArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPostFindFirstArgs>(args?: SelectSubset<T, UserPostFindFirstArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindFirstOrThrowArgs} args - Arguments to find a UserPost
     * @example
     * // Get one UserPost
     * const userPost = await prisma.userPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPostFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPosts
     * const userPosts = await prisma.userPost.findMany()
     * 
     * // Get first 10 UserPosts
     * const userPosts = await prisma.userPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPostWithIdOnly = await prisma.userPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPostFindManyArgs>(args?: SelectSubset<T, UserPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPost.
     * @param {UserPostCreateArgs} args - Arguments to create a UserPost.
     * @example
     * // Create one UserPost
     * const UserPost = await prisma.userPost.create({
     *   data: {
     *     // ... data to create a UserPost
     *   }
     * })
     * 
     */
    create<T extends UserPostCreateArgs>(args: SelectSubset<T, UserPostCreateArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPosts.
     * @param {UserPostCreateManyArgs} args - Arguments to create many UserPosts.
     * @example
     * // Create many UserPosts
     * const userPost = await prisma.userPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPostCreateManyArgs>(args?: SelectSubset<T, UserPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPosts and returns the data saved in the database.
     * @param {UserPostCreateManyAndReturnArgs} args - Arguments to create many UserPosts.
     * @example
     * // Create many UserPosts
     * const userPost = await prisma.userPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPosts and only return the `id`
     * const userPostWithIdOnly = await prisma.userPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPostCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPost.
     * @param {UserPostDeleteArgs} args - Arguments to delete one UserPost.
     * @example
     * // Delete one UserPost
     * const UserPost = await prisma.userPost.delete({
     *   where: {
     *     // ... filter to delete one UserPost
     *   }
     * })
     * 
     */
    delete<T extends UserPostDeleteArgs>(args: SelectSubset<T, UserPostDeleteArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPost.
     * @param {UserPostUpdateArgs} args - Arguments to update one UserPost.
     * @example
     * // Update one UserPost
     * const userPost = await prisma.userPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPostUpdateArgs>(args: SelectSubset<T, UserPostUpdateArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPosts.
     * @param {UserPostDeleteManyArgs} args - Arguments to filter UserPosts to delete.
     * @example
     * // Delete a few UserPosts
     * const { count } = await prisma.userPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPostDeleteManyArgs>(args?: SelectSubset<T, UserPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPosts
     * const userPost = await prisma.userPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPostUpdateManyArgs>(args: SelectSubset<T, UserPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPosts and returns the data updated in the database.
     * @param {UserPostUpdateManyAndReturnArgs} args - Arguments to update many UserPosts.
     * @example
     * // Update many UserPosts
     * const userPost = await prisma.userPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPosts and only return the `id`
     * const userPostWithIdOnly = await prisma.userPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPostUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPost.
     * @param {UserPostUpsertArgs} args - Arguments to update or create a UserPost.
     * @example
     * // Update or create a UserPost
     * const userPost = await prisma.userPost.upsert({
     *   create: {
     *     // ... data to create a UserPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPost we want to update
     *   }
     * })
     */
    upsert<T extends UserPostUpsertArgs>(args: SelectSubset<T, UserPostUpsertArgs<ExtArgs>>): Prisma__UserPostClient<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostCountArgs} args - Arguments to filter UserPosts to count.
     * @example
     * // Count the number of UserPosts
     * const count = await prisma.userPost.count({
     *   where: {
     *     // ... the filter for the UserPosts we want to count
     *   }
     * })
    **/
    count<T extends UserPostCountArgs>(
      args?: Subset<T, UserPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPostAggregateArgs>(args: Subset<T, UserPostAggregateArgs>): Prisma.PrismaPromise<GetUserPostAggregateType<T>>

    /**
     * Group by UserPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPostGroupByArgs} args - Group by arguments.
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
      T extends UserPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPostGroupByArgs['orderBy'] }
        : { orderBy?: UserPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPost model
   */
  readonly fields: UserPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPost model
   */
  interface UserPostFieldRefs {
    readonly id: FieldRef<"UserPost", 'Int'>
    readonly title: FieldRef<"UserPost", 'String'>
    readonly topic: FieldRef<"UserPost", 'String'>
    readonly tags: FieldRef<"UserPost", 'String'>
    readonly content: FieldRef<"UserPost", 'String'>
    readonly links: FieldRef<"UserPost", 'String'>
    readonly images: FieldRef<"UserPost", 'String'>
    readonly views: FieldRef<"UserPost", 'Int'>
    readonly likes: FieldRef<"UserPost", 'Int'>
    readonly userId: FieldRef<"UserPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserPost findUnique
   */
  export type UserPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost findUniqueOrThrow
   */
  export type UserPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost findFirst
   */
  export type UserPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPosts.
     */
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost findFirstOrThrow
   */
  export type UserPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPost to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPosts.
     */
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost findMany
   */
  export type UserPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter, which UserPosts to fetch.
     */
    where?: UserPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPosts to fetch.
     */
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPosts.
     */
    cursor?: UserPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPosts.
     */
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * UserPost create
   */
  export type UserPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPost.
     */
    data: XOR<UserPostCreateInput, UserPostUncheckedCreateInput>
  }

  /**
   * UserPost createMany
   */
  export type UserPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPosts.
     */
    data: UserPostCreateManyInput | UserPostCreateManyInput[]
  }

  /**
   * UserPost createManyAndReturn
   */
  export type UserPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * The data used to create many UserPosts.
     */
    data: UserPostCreateManyInput | UserPostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPost update
   */
  export type UserPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPost.
     */
    data: XOR<UserPostUpdateInput, UserPostUncheckedUpdateInput>
    /**
     * Choose, which UserPost to update.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost updateMany
   */
  export type UserPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPosts.
     */
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyInput>
    /**
     * Filter which UserPosts to update
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to update.
     */
    limit?: number
  }

  /**
   * UserPost updateManyAndReturn
   */
  export type UserPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * The data used to update UserPosts.
     */
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyInput>
    /**
     * Filter which UserPosts to update
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPost upsert
   */
  export type UserPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPost to update in case it exists.
     */
    where: UserPostWhereUniqueInput
    /**
     * In case the UserPost found by the `where` argument doesn't exist, create a new UserPost with this data.
     */
    create: XOR<UserPostCreateInput, UserPostUncheckedCreateInput>
    /**
     * In case the UserPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPostUpdateInput, UserPostUncheckedUpdateInput>
  }

  /**
   * UserPost delete
   */
  export type UserPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    /**
     * Filter which UserPost to delete.
     */
    where: UserPostWhereUniqueInput
  }

  /**
   * UserPost deleteMany
   */
  export type UserPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPosts to delete
     */
    where?: UserPostWhereInput
    /**
     * Limit how many UserPosts to delete.
     */
    limit?: number
  }

  /**
   * UserPost without action
   */
  export type UserPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
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
    username: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    image: string | null
    birthdate: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    image: string | null
    birthdate: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    firstname: number
    lastname: number
    password: number
    image: number
    birthdate: number
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
    username?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    image?: true
    birthdate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    image?: true
    birthdate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstname?: true
    lastname?: true
    password?: true
    image?: true
    birthdate?: true
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
    username: string | null
    email: string
    firstname: string | null
    lastname: string | null
    password: string
    image: string | null
    birthdate: string | null
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
    username?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    image?: boolean
    birthdate?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    albums?: boolean | User$albumsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    image?: boolean
    birthdate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    image?: boolean
    birthdate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    image?: boolean
    birthdate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "firstname" | "lastname" | "password" | "image" | "birthdate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    albums?: boolean | User$albumsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$UserPostPayload<ExtArgs>[]
      albums: Prisma.$UserAlbumPayload<ExtArgs>[]
      friendOf: Prisma.$FriendPayload<ExtArgs>[]
      friends: Prisma.$FriendPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      email: string
      firstname: string | null
      lastname: string | null
      password: string
      image: string | null
      birthdate: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends User$albumsArgs<ExtArgs> = {}>(args?: Subset<T, User$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'String'>
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
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPost
     */
    select?: UserPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPost
     */
    omit?: UserPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPostInclude<ExtArgs> | null
    where?: UserPostWhereInput
    orderBy?: UserPostOrderByWithRelationInput | UserPostOrderByWithRelationInput[]
    cursor?: UserPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPostScalarFieldEnum | UserPostScalarFieldEnum[]
  }

  /**
   * User.albums
   */
  export type User$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAlbum
     */
    select?: UserAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAlbum
     */
    omit?: UserAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAlbumInclude<ExtArgs> | null
    where?: UserAlbumWhereInput
    orderBy?: UserAlbumOrderByWithRelationInput | UserAlbumOrderByWithRelationInput[]
    cursor?: UserAlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAlbumScalarFieldEnum | UserAlbumScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserAlbumScalarFieldEnum: {
    id: 'id',
    src: 'src',
    userId: 'userId'
  };

  export type UserAlbumScalarFieldEnum = (typeof UserAlbumScalarFieldEnum)[keyof typeof UserAlbumScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    friendUserId: 'friendUserId',
    friendOfId: 'friendOfId'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const UserPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topic: 'topic',
    tags: 'tags',
    content: 'content',
    links: 'links',
    images: 'images',
    views: 'views',
    likes: 'likes',
    userId: 'userId'
  };

  export type UserPostScalarFieldEnum = (typeof UserPostScalarFieldEnum)[keyof typeof UserPostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    image: 'image',
    birthdate: 'birthdate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserAlbumWhereInput = {
    AND?: UserAlbumWhereInput | UserAlbumWhereInput[]
    OR?: UserAlbumWhereInput[]
    NOT?: UserAlbumWhereInput | UserAlbumWhereInput[]
    id?: IntFilter<"UserAlbum"> | number
    src?: StringFilter<"UserAlbum"> | string
    userId?: IntFilter<"UserAlbum"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAlbumOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserAlbumWhereInput | UserAlbumWhereInput[]
    OR?: UserAlbumWhereInput[]
    NOT?: UserAlbumWhereInput | UserAlbumWhereInput[]
    src?: StringFilter<"UserAlbum"> | string
    userId?: IntFilter<"UserAlbum"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAlbumOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    userId?: SortOrder
    _count?: UserAlbumCountOrderByAggregateInput
    _avg?: UserAlbumAvgOrderByAggregateInput
    _max?: UserAlbumMaxOrderByAggregateInput
    _min?: UserAlbumMinOrderByAggregateInput
    _sum?: UserAlbumSumOrderByAggregateInput
  }

  export type UserAlbumScalarWhereWithAggregatesInput = {
    AND?: UserAlbumScalarWhereWithAggregatesInput | UserAlbumScalarWhereWithAggregatesInput[]
    OR?: UserAlbumScalarWhereWithAggregatesInput[]
    NOT?: UserAlbumScalarWhereWithAggregatesInput | UserAlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAlbum"> | number
    src?: StringWithAggregatesFilter<"UserAlbum"> | string
    userId?: IntWithAggregatesFilter<"UserAlbum"> | number
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: IntFilter<"Friend"> | number
    friendUserId?: IntFilter<"Friend"> | number
    friendOfId?: IntFilter<"Friend"> | number
    friendUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    friendOf?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
    friendUser?: UserOrderByWithRelationInput
    friendOf?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    friendUserId?: IntFilter<"Friend"> | number
    friendOfId?: IntFilter<"Friend"> | number
    friendUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    friendOf?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friend"> | number
    friendUserId?: IntWithAggregatesFilter<"Friend"> | number
    friendOfId?: IntWithAggregatesFilter<"Friend"> | number
  }

  export type UserPostWhereInput = {
    AND?: UserPostWhereInput | UserPostWhereInput[]
    OR?: UserPostWhereInput[]
    NOT?: UserPostWhereInput | UserPostWhereInput[]
    id?: IntFilter<"UserPost"> | number
    title?: StringFilter<"UserPost"> | string
    topic?: StringNullableFilter<"UserPost"> | string | null
    tags?: StringNullableFilter<"UserPost"> | string | null
    content?: StringFilter<"UserPost"> | string
    links?: StringNullableFilter<"UserPost"> | string | null
    images?: StringNullableFilter<"UserPost"> | string | null
    views?: IntFilter<"UserPost"> | number
    likes?: IntFilter<"UserPost"> | number
    userId?: IntFilter<"UserPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    content?: SortOrder
    links?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPostWhereInput | UserPostWhereInput[]
    OR?: UserPostWhereInput[]
    NOT?: UserPostWhereInput | UserPostWhereInput[]
    title?: StringFilter<"UserPost"> | string
    topic?: StringNullableFilter<"UserPost"> | string | null
    tags?: StringNullableFilter<"UserPost"> | string | null
    content?: StringFilter<"UserPost"> | string
    links?: StringNullableFilter<"UserPost"> | string | null
    images?: StringNullableFilter<"UserPost"> | string | null
    views?: IntFilter<"UserPost"> | number
    likes?: IntFilter<"UserPost"> | number
    userId?: IntFilter<"UserPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    content?: SortOrder
    links?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    _count?: UserPostCountOrderByAggregateInput
    _avg?: UserPostAvgOrderByAggregateInput
    _max?: UserPostMaxOrderByAggregateInput
    _min?: UserPostMinOrderByAggregateInput
    _sum?: UserPostSumOrderByAggregateInput
  }

  export type UserPostScalarWhereWithAggregatesInput = {
    AND?: UserPostScalarWhereWithAggregatesInput | UserPostScalarWhereWithAggregatesInput[]
    OR?: UserPostScalarWhereWithAggregatesInput[]
    NOT?: UserPostScalarWhereWithAggregatesInput | UserPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPost"> | number
    title?: StringWithAggregatesFilter<"UserPost"> | string
    topic?: StringNullableWithAggregatesFilter<"UserPost"> | string | null
    tags?: StringNullableWithAggregatesFilter<"UserPost"> | string | null
    content?: StringWithAggregatesFilter<"UserPost"> | string
    links?: StringNullableWithAggregatesFilter<"UserPost"> | string | null
    images?: StringNullableWithAggregatesFilter<"UserPost"> | string | null
    views?: IntWithAggregatesFilter<"UserPost"> | number
    likes?: IntWithAggregatesFilter<"UserPost"> | number
    userId?: IntWithAggregatesFilter<"UserPost"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    birthdate?: StringNullableFilter<"User"> | string | null
    posts?: UserPostListRelationFilter
    albums?: UserAlbumListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    posts?: UserPostOrderByRelationAggregateInput
    albums?: UserAlbumOrderByRelationAggregateInput
    friendOf?: FriendOrderByRelationAggregateInput
    friends?: FriendOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    birthdate?: StringNullableFilter<"User"> | string | null
    posts?: UserPostListRelationFilter
    albums?: UserAlbumListRelationFilter
    friendOf?: FriendListRelationFilter
    friends?: FriendListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
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
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthdate?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserAlbumCreateInput = {
    src: string
    user: UserCreateNestedOneWithoutAlbumsInput
  }

  export type UserAlbumUncheckedCreateInput = {
    id?: number
    src: string
    userId: number
  }

  export type UserAlbumUpdateInput = {
    src?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type UserAlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAlbumCreateManyInput = {
    id?: number
    src: string
    userId: number
  }

  export type UserAlbumUpdateManyMutationInput = {
    src?: StringFieldUpdateOperationsInput | string
  }

  export type UserAlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendCreateInput = {
    friendUser: UserCreateNestedOneWithoutFriendsInput
    friendOf: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateInput = {
    id?: number
    friendUserId: number
    friendOfId: number
  }

  export type FriendUpdateInput = {
    friendUser?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendUserId?: IntFieldUpdateOperationsInput | number
    friendOfId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendCreateManyInput = {
    id?: number
    friendUserId: number
    friendOfId: number
  }

  export type FriendUpdateManyMutationInput = {

  }

  export type FriendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendUserId?: IntFieldUpdateOperationsInput | number
    friendOfId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostCreateInput = {
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
    user?: UserCreateNestedOneWithoutPostsInput
  }

  export type UserPostUncheckedCreateInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
    userId?: number
  }

  export type UserPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type UserPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostCreateManyInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
    userId?: number
  }

  export type UserPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostCreateNestedManyWithoutUserInput
    albums?: UserAlbumCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostUncheckedCreateNestedManyWithoutUserInput
    albums?: UserAlbumUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendUserInput
  }

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUncheckedUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserAlbumCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    userId?: SortOrder
  }

  export type UserAlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserAlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    userId?: SortOrder
  }

  export type UserAlbumMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    userId?: SortOrder
  }

  export type UserAlbumSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    id?: SortOrder
    friendUserId?: SortOrder
    friendOfId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    links?: SortOrder
    images?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type UserPostAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type UserPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    links?: SortOrder
    images?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type UserPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    links?: SortOrder
    images?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type UserPostSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type UserPostListRelationFilter = {
    every?: UserPostWhereInput
    some?: UserPostWhereInput
    none?: UserPostWhereInput
  }

  export type UserAlbumListRelationFilter = {
    every?: UserAlbumWhereInput
    some?: UserAlbumWhereInput
    none?: UserAlbumWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type UserPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    image?: SortOrder
    birthdate?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    image?: SortOrder
    birthdate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    image?: SortOrder
    birthdate?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    upsert?: UserUpsertWithoutAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumsInput, UserUpdateWithoutAlbumsInput>, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserPostCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput> | UserPostCreateWithoutUserInput[] | UserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutUserInput | UserPostCreateOrConnectWithoutUserInput[]
    createMany?: UserPostCreateManyUserInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserAlbumCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput> | UserAlbumCreateWithoutUserInput[] | UserAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAlbumCreateOrConnectWithoutUserInput | UserAlbumCreateOrConnectWithoutUserInput[]
    createMany?: UserAlbumCreateManyUserInputEnvelope
    connect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendUserInput = {
    create?: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput> | FriendCreateWithoutFriendUserInput[] | FriendUncheckedCreateWithoutFriendUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendUserInput | FriendCreateOrConnectWithoutFriendUserInput[]
    createMany?: FriendCreateManyFriendUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type UserPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput> | UserPostCreateWithoutUserInput[] | UserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutUserInput | UserPostCreateOrConnectWithoutUserInput[]
    createMany?: UserPostCreateManyUserInputEnvelope
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
  }

  export type UserAlbumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput> | UserAlbumCreateWithoutUserInput[] | UserAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAlbumCreateOrConnectWithoutUserInput | UserAlbumCreateOrConnectWithoutUserInput[]
    createMany?: UserAlbumCreateManyUserInputEnvelope
    connect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendOfInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendUserInput = {
    create?: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput> | FriendCreateWithoutFriendUserInput[] | FriendUncheckedCreateWithoutFriendUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendUserInput | FriendCreateOrConnectWithoutFriendUserInput[]
    createMany?: FriendCreateManyFriendUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type UserPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput> | UserPostCreateWithoutUserInput[] | UserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutUserInput | UserPostCreateOrConnectWithoutUserInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutUserInput | UserPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPostCreateManyUserInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutUserInput | UserPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutUserInput | UserPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserAlbumUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput> | UserAlbumCreateWithoutUserInput[] | UserAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAlbumCreateOrConnectWithoutUserInput | UserAlbumCreateOrConnectWithoutUserInput[]
    upsert?: UserAlbumUpsertWithWhereUniqueWithoutUserInput | UserAlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAlbumCreateManyUserInputEnvelope
    set?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    disconnect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    delete?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    connect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    update?: UserAlbumUpdateWithWhereUniqueWithoutUserInput | UserAlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAlbumUpdateManyWithWhereWithoutUserInput | UserAlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAlbumScalarWhereInput | UserAlbumScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendOfInput | FriendUpsertWithWhereUniqueWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendOfInput | FriendUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendOfInput | FriendUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendUserNestedInput = {
    create?: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput> | FriendCreateWithoutFriendUserInput[] | FriendUncheckedCreateWithoutFriendUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendUserInput | FriendCreateOrConnectWithoutFriendUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendUserInput | FriendUpsertWithWhereUniqueWithoutFriendUserInput[]
    createMany?: FriendCreateManyFriendUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendUserInput | FriendUpdateWithWhereUniqueWithoutFriendUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendUserInput | FriendUpdateManyWithWhereWithoutFriendUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type UserPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput> | UserPostCreateWithoutUserInput[] | UserPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPostCreateOrConnectWithoutUserInput | UserPostCreateOrConnectWithoutUserInput[]
    upsert?: UserPostUpsertWithWhereUniqueWithoutUserInput | UserPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPostCreateManyUserInputEnvelope
    set?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    disconnect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    delete?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    connect?: UserPostWhereUniqueInput | UserPostWhereUniqueInput[]
    update?: UserPostUpdateWithWhereUniqueWithoutUserInput | UserPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPostUpdateManyWithWhereWithoutUserInput | UserPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
  }

  export type UserAlbumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput> | UserAlbumCreateWithoutUserInput[] | UserAlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAlbumCreateOrConnectWithoutUserInput | UserAlbumCreateOrConnectWithoutUserInput[]
    upsert?: UserAlbumUpsertWithWhereUniqueWithoutUserInput | UserAlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAlbumCreateManyUserInputEnvelope
    set?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    disconnect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    delete?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    connect?: UserAlbumWhereUniqueInput | UserAlbumWhereUniqueInput[]
    update?: UserAlbumUpdateWithWhereUniqueWithoutUserInput | UserAlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAlbumUpdateManyWithWhereWithoutUserInput | UserAlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAlbumScalarWhereInput | UserAlbumScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendOfNestedInput = {
    create?: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput> | FriendCreateWithoutFriendOfInput[] | FriendUncheckedCreateWithoutFriendOfInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendOfInput | FriendCreateOrConnectWithoutFriendOfInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendOfInput | FriendUpsertWithWhereUniqueWithoutFriendOfInput[]
    createMany?: FriendCreateManyFriendOfInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendOfInput | FriendUpdateWithWhereUniqueWithoutFriendOfInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendOfInput | FriendUpdateManyWithWhereWithoutFriendOfInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendUserNestedInput = {
    create?: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput> | FriendCreateWithoutFriendUserInput[] | FriendUncheckedCreateWithoutFriendUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendUserInput | FriendCreateOrConnectWithoutFriendUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendUserInput | FriendUpsertWithWhereUniqueWithoutFriendUserInput[]
    createMany?: FriendCreateManyFriendUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendUserInput | FriendUpdateWithWhereUniqueWithoutFriendUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendUserInput | FriendUpdateManyWithWhereWithoutFriendUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutAlbumsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendUserInput
  }

  export type UserUncheckedCreateWithoutAlbumsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendUserInput
  }

  export type UserCreateOrConnectWithoutAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
  }

  export type UserUpsertWithoutAlbumsInput = {
    update: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlbumsInput, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserUpdateWithoutAlbumsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendUserNestedInput
  }

  export type UserCreateWithoutFriendsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostCreateNestedManyWithoutUserInput
    albums?: UserAlbumCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostUncheckedCreateNestedManyWithoutUserInput
    albums?: UserAlbumUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostCreateNestedManyWithoutUserInput
    albums?: UserAlbumCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutFriendUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: UserPostUncheckedCreateNestedManyWithoutUserInput
    albums?: UserAlbumUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUncheckedUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutFriendUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: UserPostUncheckedUpdateManyWithoutUserNestedInput
    albums?: UserAlbumUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    albums?: UserAlbumCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendOfInput
    friends?: FriendCreateNestedManyWithoutFriendUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    albums?: UserAlbumUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendOfInput
    friends?: FriendUncheckedCreateNestedManyWithoutFriendUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
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
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: UserAlbumUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUpdateManyWithoutFriendUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: UserAlbumUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendOfNestedInput
    friends?: FriendUncheckedUpdateManyWithoutFriendUserNestedInput
  }

  export type UserPostCreateWithoutUserInput = {
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
  }

  export type UserPostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
  }

  export type UserPostCreateOrConnectWithoutUserInput = {
    where: UserPostWhereUniqueInput
    create: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput>
  }

  export type UserPostCreateManyUserInputEnvelope = {
    data: UserPostCreateManyUserInput | UserPostCreateManyUserInput[]
  }

  export type UserAlbumCreateWithoutUserInput = {
    src: string
  }

  export type UserAlbumUncheckedCreateWithoutUserInput = {
    id?: number
    src: string
  }

  export type UserAlbumCreateOrConnectWithoutUserInput = {
    where: UserAlbumWhereUniqueInput
    create: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput>
  }

  export type UserAlbumCreateManyUserInputEnvelope = {
    data: UserAlbumCreateManyUserInput | UserAlbumCreateManyUserInput[]
  }

  export type FriendCreateWithoutFriendOfInput = {
    friendUser: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateWithoutFriendOfInput = {
    id?: number
    friendUserId: number
  }

  export type FriendCreateOrConnectWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendCreateManyFriendOfInputEnvelope = {
    data: FriendCreateManyFriendOfInput | FriendCreateManyFriendOfInput[]
  }

  export type FriendCreateWithoutFriendUserInput = {
    friendOf: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateWithoutFriendUserInput = {
    id?: number
    friendOfId: number
  }

  export type FriendCreateOrConnectWithoutFriendUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput>
  }

  export type FriendCreateManyFriendUserInputEnvelope = {
    data: FriendCreateManyFriendUserInput | FriendCreateManyFriendUserInput[]
  }

  export type UserPostUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPostWhereUniqueInput
    update: XOR<UserPostUpdateWithoutUserInput, UserPostUncheckedUpdateWithoutUserInput>
    create: XOR<UserPostCreateWithoutUserInput, UserPostUncheckedCreateWithoutUserInput>
  }

  export type UserPostUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPostWhereUniqueInput
    data: XOR<UserPostUpdateWithoutUserInput, UserPostUncheckedUpdateWithoutUserInput>
  }

  export type UserPostUpdateManyWithWhereWithoutUserInput = {
    where: UserPostScalarWhereInput
    data: XOR<UserPostUpdateManyMutationInput, UserPostUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPostScalarWhereInput = {
    AND?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
    OR?: UserPostScalarWhereInput[]
    NOT?: UserPostScalarWhereInput | UserPostScalarWhereInput[]
    id?: IntFilter<"UserPost"> | number
    title?: StringFilter<"UserPost"> | string
    topic?: StringNullableFilter<"UserPost"> | string | null
    tags?: StringNullableFilter<"UserPost"> | string | null
    content?: StringFilter<"UserPost"> | string
    links?: StringNullableFilter<"UserPost"> | string | null
    images?: StringNullableFilter<"UserPost"> | string | null
    views?: IntFilter<"UserPost"> | number
    likes?: IntFilter<"UserPost"> | number
    userId?: IntFilter<"UserPost"> | number
  }

  export type UserAlbumUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAlbumWhereUniqueInput
    update: XOR<UserAlbumUpdateWithoutUserInput, UserAlbumUncheckedUpdateWithoutUserInput>
    create: XOR<UserAlbumCreateWithoutUserInput, UserAlbumUncheckedCreateWithoutUserInput>
  }

  export type UserAlbumUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAlbumWhereUniqueInput
    data: XOR<UserAlbumUpdateWithoutUserInput, UserAlbumUncheckedUpdateWithoutUserInput>
  }

  export type UserAlbumUpdateManyWithWhereWithoutUserInput = {
    where: UserAlbumScalarWhereInput
    data: XOR<UserAlbumUpdateManyMutationInput, UserAlbumUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAlbumScalarWhereInput = {
    AND?: UserAlbumScalarWhereInput | UserAlbumScalarWhereInput[]
    OR?: UserAlbumScalarWhereInput[]
    NOT?: UserAlbumScalarWhereInput | UserAlbumScalarWhereInput[]
    id?: IntFilter<"UserAlbum"> | number
    src?: StringFilter<"UserAlbum"> | string
    userId?: IntFilter<"UserAlbum"> | number
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendOfInput, FriendUncheckedUpdateWithoutFriendOfInput>
    create: XOR<FriendCreateWithoutFriendOfInput, FriendUncheckedCreateWithoutFriendOfInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendOfInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendOfInput, FriendUncheckedUpdateWithoutFriendOfInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendOfInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendOfInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: IntFilter<"Friend"> | number
    friendUserId?: IntFilter<"Friend"> | number
    friendOfId?: IntFilter<"Friend"> | number
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendUserInput, FriendUncheckedUpdateWithoutFriendUserInput>
    create: XOR<FriendCreateWithoutFriendUserInput, FriendUncheckedCreateWithoutFriendUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendUserInput, FriendUncheckedUpdateWithoutFriendUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendUserInput>
  }

  export type UserPostCreateManyUserInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    links?: string | null
    images?: string | null
    views?: number
    likes?: number
  }

  export type UserAlbumCreateManyUserInput = {
    id?: number
    src: string
  }

  export type FriendCreateManyFriendOfInput = {
    id?: number
    friendUserId: number
  }

  export type FriendCreateManyFriendUserInput = {
    id?: number
    friendOfId: number
  }

  export type UserPostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type UserPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type UserAlbumUpdateWithoutUserInput = {
    src?: StringFieldUpdateOperationsInput | string
  }

  export type UserAlbumUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
  }

  export type UserAlbumUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
  }

  export type FriendUpdateWithoutFriendOfInput = {
    friendUser?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendUserId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendUserId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUpdateWithoutFriendUserInput = {
    friendOf?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendOfId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyWithoutFriendUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendOfId?: IntFieldUpdateOperationsInput | number
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