
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
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UsersOnChats
 * 
 */
export type UsersOnChats = $Result.DefaultSelection<Prisma.$UsersOnChatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Albums
 * const albums = await prisma.album.findMany()
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
   * // Fetch zero or more Albums
   * const albums = await prisma.album.findMany()
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
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersOnChats`: Exposes CRUD operations for the **UsersOnChats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersOnChats
    * const usersOnChats = await prisma.usersOnChats.findMany()
    * ```
    */
  get usersOnChats(): Prisma.UsersOnChatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Album: 'Album',
    Avatar: 'Avatar',
    ChatGroup: 'ChatGroup',
    ChatMessage: 'ChatMessage',
    Friendship: 'Friendship',
    Image: 'Image',
    Link: 'Link',
    Post: 'Post',
    User: 'User',
    UsersOnChats: 'UsersOnChats'
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
      modelProps: "album" | "avatar" | "chatGroup" | "chatMessage" | "friendship" | "image" | "link" | "post" | "user" | "usersOnChats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
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
      UsersOnChats: {
        payload: Prisma.$UsersOnChatsPayload<ExtArgs>
        fields: Prisma.UsersOnChatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersOnChatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersOnChatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          findFirst: {
            args: Prisma.UsersOnChatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersOnChatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          findMany: {
            args: Prisma.UsersOnChatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>[]
          }
          create: {
            args: Prisma.UsersOnChatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          createMany: {
            args: Prisma.UsersOnChatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersOnChatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>[]
          }
          delete: {
            args: Prisma.UsersOnChatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          update: {
            args: Prisma.UsersOnChatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          deleteMany: {
            args: Prisma.UsersOnChatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersOnChatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersOnChatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>[]
          }
          upsert: {
            args: Prisma.UsersOnChatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersOnChatsPayload>
          }
          aggregate: {
            args: Prisma.UsersOnChatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersOnChats>
          }
          groupBy: {
            args: Prisma.UsersOnChatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersOnChatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersOnChatsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersOnChatsCountAggregateOutputType> | number
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
    album?: AlbumOmit
    avatar?: AvatarOmit
    chatGroup?: ChatGroupOmit
    chatMessage?: ChatMessageOmit
    friendship?: FriendshipOmit
    image?: ImageOmit
    link?: LinkOmit
    post?: PostOmit
    user?: UserOmit
    usersOnChats?: UsersOnChatsOmit
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
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    images: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | AlbumCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    members: number
    messages: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatGroupCountOutputTypeCountMembersArgs
    messages?: boolean | ChatGroupCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnChatsWhereInput
  }

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ChatMessageCountOutputType
   */

  export type ChatMessageCountOutputType = {
    attachedImage: number
  }

  export type ChatMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachedImage?: boolean | ChatMessageCountOutputTypeCountAttachedImageArgs
  }

  // Custom InputTypes
  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessageCountOutputType
     */
    select?: ChatMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatMessageCountOutputType without action
   */
  export type ChatMessageCountOutputTypeCountAttachedImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    images: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PostCountOutputTypeCountImagesArgs
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
  export type PostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    albums: number
    sentRequests: number
    receivedRequests: number
    avatars: number
    sentMessages: number
    chatGroups: number
    administeredGroups: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    albums?: boolean | UserCountOutputTypeCountAlbumsArgs
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    avatars?: boolean | UserCountOutputTypeCountAvatarsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    chatGroups?: boolean | UserCountOutputTypeCountChatGroupsArgs
    administeredGroups?: boolean | UserCountOutputTypeCountAdministeredGroupsArgs
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
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnChatsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdministeredGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    previewImage: string | null
    userId: number | null
    shown: boolean | null
    topic: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    previewImage: string | null
    userId: number | null
    shown: boolean | null
    topic: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    previewImage: number
    userId: number
    shown: number
    topic: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    previewImage?: true
    userId?: true
    shown?: true
    topic?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    previewImage?: true
    userId?: true
    shown?: true
    topic?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    previewImage?: true
    userId?: true
    shown?: true
    topic?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    previewImage: string | null
    userId: number
    shown: boolean
    topic: string
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    previewImage?: boolean
    userId?: boolean
    shown?: boolean
    topic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Album$imagesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    previewImage?: boolean
    userId?: boolean
    shown?: boolean
    topic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    previewImage?: boolean
    userId?: boolean
    shown?: boolean
    topic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    previewImage?: boolean
    userId?: boolean
    shown?: boolean
    topic?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "previewImage" | "userId" | "shown" | "topic", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Album$imagesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      previewImage: string | null
      userId: number
      shown: boolean
      topic: string
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Album$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Album$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly name: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly previewImage: FieldRef<"Album", 'String'>
    readonly userId: FieldRef<"Album", 'Int'>
    readonly shown: FieldRef<"Album", 'Boolean'>
    readonly topic: FieldRef<"Album", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.images
   */
  export type Album$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvatarSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvatarMinAggregateOutputType = {
    id: number | null
    image: string | null
    userId: number | null
    active: boolean | null
    shown: boolean | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: number | null
    image: string | null
    userId: number | null
    active: boolean | null
    shown: boolean | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    image: number
    userId: number
    active: number
    shown: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvatarSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvatarMinAggregateInputType = {
    id?: true
    image?: true
    userId?: true
    active?: true
    shown?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    image?: true
    userId?: true
    active?: true
    shown?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    image?: true
    userId?: true
    active?: true
    shown?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: number
    image: string
    userId: number
    active: boolean
    shown: boolean
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    userId?: boolean
    active?: boolean
    shown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    userId?: boolean
    active?: boolean
    shown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    userId?: boolean
    active?: boolean
    shown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    image?: boolean
    userId?: boolean
    active?: boolean
    shown?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "userId" | "active" | "shown", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      userId: number
      active: boolean
      shown: boolean
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
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
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'Int'>
    readonly image: FieldRef<"Avatar", 'String'>
    readonly userId: FieldRef<"Avatar", 'Int'>
    readonly active: FieldRef<"Avatar", 'Boolean'>
    readonly shown: FieldRef<"Avatar", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type ChatGroupSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    isPersonalChat: boolean | null
    avatar: string | null
    adminId: number | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isPersonalChat: boolean | null
    avatar: string | null
    adminId: number | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    name: number
    isPersonalChat: number
    avatar: number
    adminId: number
    _all: number
  }


  export type ChatGroupAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type ChatGroupSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type ChatGroupMinAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    avatar?: true
    adminId?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    avatar?: true
    adminId?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    name?: true
    isPersonalChat?: true
    avatar?: true
    adminId?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _avg?: ChatGroupAvgAggregateInputType
    _sum?: ChatGroupSumAggregateInputType
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: number
    name: string | null
    isPersonalChat: boolean
    avatar: string | null
    adminId: number
    _count: ChatGroupCountAggregateOutputType | null
    _avg: ChatGroupAvgAggregateOutputType | null
    _sum: ChatGroupSumAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    avatar?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    avatar?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    avatar?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
    name?: boolean
    isPersonalChat?: boolean
    avatar?: boolean
    adminId?: boolean
  }

  export type ChatGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isPersonalChat" | "avatar" | "adminId", ExtArgs["result"]["chatGroup"]>
  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UsersOnChatsPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      isPersonalChat: boolean
      avatar: string | null
      adminId: number
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }

  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupFindUniqueArgs>(args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupFindFirstArgs>(args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupFindManyArgs>(args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
     */
    create<T extends ChatGroupCreateArgs>(args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupCreateManyArgs>(args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatGroups and returns the data saved in the database.
     * @param {ChatGroupCreateManyAndReturnArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroup = await prisma.chatGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupDeleteArgs>(args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupUpdateArgs>(args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupDeleteManyArgs>(args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupUpdateManyArgs>(args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups and returns the data updated in the database.
     * @param {ChatGroupUpdateManyAndReturnArgs} args - Arguments to update many ChatGroups.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatGroups and only return the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupUpsertArgs>(args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends ChatGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends ChatGroup$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatGroup model
   */
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'Int'>
    readonly name: FieldRef<"ChatGroup", 'String'>
    readonly isPersonalChat: FieldRef<"ChatGroup", 'Boolean'>
    readonly avatar: FieldRef<"ChatGroup", 'String'>
    readonly adminId: FieldRef<"ChatGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }

  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }

  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
  }

  /**
   * ChatGroup createManyAndReturn
   */
  export type ChatGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroup updateManyAndReturn
   */
  export type ChatGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }

  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }

  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroup.members
   */
  export type ChatGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    where?: UsersOnChatsWhereInput
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    cursor?: UsersOnChatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnChatsScalarFieldEnum | UsersOnChatsScalarFieldEnum[]
  }

  /**
   * ChatGroup.messages
   */
  export type ChatGroup$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    sentAt: Date | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    sentAt: Date | null
    authorId: number | null
    chatGroupId: number | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    content: number
    sentAt: number
    authorId: number
    chatGroupId: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    authorId?: true
    chatGroupId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    content: string
    sentAt: Date
    authorId: number
    chatGroupId: number
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    attachedImage?: boolean | ChatMessage$attachedImageArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    content?: boolean
    sentAt?: boolean
    authorId?: boolean
    chatGroupId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sentAt" | "authorId" | "chatGroupId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachedImage?: boolean | ChatMessage$attachedImageArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
    _count?: boolean | ChatMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      attachedImage: Prisma.$ImagePayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      sentAt: Date
      authorId: number
      chatGroupId: number
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachedImage<T extends ChatMessage$attachedImageArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$attachedImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly sentAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly authorId: FieldRef<"ChatMessage", 'Int'>
    readonly chatGroupId: FieldRef<"ChatMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.attachedImage
   */
  export type ChatMessage$attachedImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipAvgAggregateOutputType = {
    id: number | null
    profile1Id: number | null
    profile2Id: number | null
  }

  export type FriendshipSumAggregateOutputType = {
    id: number | null
    profile1Id: number | null
    profile2Id: number | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: number | null
    accepted: boolean | null
    profile1Id: number | null
    profile2Id: number | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: number | null
    accepted: boolean | null
    profile1Id: number | null
    profile2Id: number | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    accepted: number
    profile1Id: number
    profile2Id: number
    _all: number
  }


  export type FriendshipAvgAggregateInputType = {
    id?: true
    profile1Id?: true
    profile2Id?: true
  }

  export type FriendshipSumAggregateInputType = {
    id?: true
    profile1Id?: true
    profile2Id?: true
  }

  export type FriendshipMinAggregateInputType = {
    id?: true
    accepted?: true
    profile1Id?: true
    profile2Id?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    accepted?: true
    profile1Id?: true
    profile2Id?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    accepted?: true
    profile1Id?: true
    profile2Id?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _avg?: FriendshipAvgAggregateInputType
    _sum?: FriendshipSumAggregateInputType
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: number
    accepted: boolean
    profile1Id: number
    profile2Id: number
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accepted?: boolean
    profile1Id?: boolean
    profile2Id?: boolean
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accepted?: boolean
    profile1Id?: boolean
    profile2Id?: boolean
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accepted?: boolean
    profile1Id?: boolean
    profile2Id?: boolean
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    accepted?: boolean
    profile1Id?: boolean
    profile2Id?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accepted" | "profile1Id" | "profile2Id", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile1?: boolean | UserDefaultArgs<ExtArgs>
    profile2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      profile1: Prisma.$UserPayload<ExtArgs>
      profile2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accepted: boolean
      profile1Id: number
      profile2Id: number
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
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
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'Int'>
    readonly accepted: FieldRef<"Friendship", 'Boolean'>
    readonly profile1Id: FieldRef<"Friendship", 'Int'>
    readonly profile2Id: FieldRef<"Friendship", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    albumId: number | null
    messageId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    postId: number | null
    albumId: number | null
    messageId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    filename: string | null
    file: string | null
    uploadedAt: Date | null
    postId: number | null
    albumId: number | null
    messageId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    file: string | null
    uploadedAt: Date | null
    postId: number | null
    albumId: number | null
    messageId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    filename: number
    file: number
    uploadedAt: number
    postId: number
    albumId: number
    messageId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    postId?: true
    albumId?: true
    messageId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    postId?: true
    albumId?: true
    messageId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    filename?: true
    file?: true
    uploadedAt?: true
    postId?: true
    albumId?: true
    messageId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    filename?: true
    file?: true
    uploadedAt?: true
    postId?: true
    albumId?: true
    messageId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    filename?: true
    file?: true
    uploadedAt?: true
    postId?: true
    albumId?: true
    messageId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    filename: string
    file: string
    uploadedAt: Date
    postId: number | null
    albumId: number | null
    messageId: number | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    file?: boolean
    uploadedAt?: boolean
    postId?: boolean
    albumId?: boolean
    messageId?: boolean
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    file?: boolean
    uploadedAt?: boolean
    postId?: boolean
    albumId?: boolean
    messageId?: boolean
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    file?: boolean
    uploadedAt?: boolean
    postId?: boolean
    albumId?: boolean
    messageId?: boolean
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    filename?: boolean
    file?: boolean
    uploadedAt?: boolean
    postId?: boolean
    albumId?: boolean
    messageId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "file" | "uploadedAt" | "postId" | "albumId" | "messageId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Image$postArgs<ExtArgs>
    album?: boolean | Image$albumArgs<ExtArgs>
    message?: boolean | Image$messageArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
      message: Prisma.$ChatMessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      file: string
      uploadedAt: Date
      postId: number | null
      albumId: number | null
      messageId: number | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Image$postArgs<ExtArgs> = {}>(args?: Subset<T, Image$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    album<T extends Image$albumArgs<ExtArgs> = {}>(args?: Subset<T, Image$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    message<T extends Image$messageArgs<ExtArgs> = {}>(args?: Subset<T, Image$messageArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly filename: FieldRef<"Image", 'String'>
    readonly file: FieldRef<"Image", 'String'>
    readonly uploadedAt: FieldRef<"Image", 'DateTime'>
    readonly postId: FieldRef<"Image", 'Int'>
    readonly albumId: FieldRef<"Image", 'Int'>
    readonly messageId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.post
   */
  export type Image$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Image.album
   */
  export type Image$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Image.message
   */
  export type Image$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    url: string
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["link"]>

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
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
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly url: FieldRef<"Link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
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
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    views: number | null
    likes: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    topic: string | null
    tags: string | null
    content: string | null
    views: number | null
    likes: number | null
    userId: number | null
    links: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    topic: string | null
    tags: string | null
    content: string | null
    views: number | null
    likes: number | null
    userId: number | null
    links: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    topic: number
    tags: number
    content: number
    views: number
    likes: number
    userId: number
    links: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    views?: true
    likes?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    views?: true
    likes?: true
    userId?: true
    links?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    views?: true
    likes?: true
    userId?: true
    links?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    tags?: true
    content?: true
    views?: true
    likes?: true
    userId?: true
    links?: true
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
    topic: string | null
    tags: string | null
    content: string
    views: number
    likes: number
    userId: number
    links: string | null
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
    topic?: boolean
    tags?: boolean
    content?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    links?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Post$imagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    links?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    links?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    topic?: boolean
    tags?: boolean
    content?: boolean
    views?: boolean
    likes?: boolean
    userId?: boolean
    links?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "topic" | "tags" | "content" | "views" | "likes" | "userId" | "links", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Post$imagesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      topic: string | null
      tags: string | null
      content: string
      views: number
      likes: number
      userId: number
      links: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Post$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Post$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly topic: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly views: FieldRef<"Post", 'Int'>
    readonly likes: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly links: FieldRef<"Post", 'String'>
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
   * Post.images
   */
  export type Post$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
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
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    chatGroups?: boolean | User$chatGroupsArgs<ExtArgs>
    administeredGroups?: boolean | User$administeredGroupsArgs<ExtArgs>
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
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    chatGroups?: boolean | User$chatGroupsArgs<ExtArgs>
    administeredGroups?: boolean | User$administeredGroupsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      sentRequests: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedRequests: Prisma.$FriendshipPayload<ExtArgs>[]
      avatars: Prisma.$AvatarPayload<ExtArgs>[]
      sentMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatGroups: Prisma.$UsersOnChatsPayload<ExtArgs>[]
      administeredGroups: Prisma.$ChatGroupPayload<ExtArgs>[]
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
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends User$albumsArgs<ExtArgs> = {}>(args?: Subset<T, User$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatars<T extends User$avatarsArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatGroups<T extends User$chatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    administeredGroups<T extends User$administeredGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$administeredGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.albums
   */
  export type User$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.avatars
   */
  export type User$avatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatGroups
   */
  export type User$chatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    where?: UsersOnChatsWhereInput
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    cursor?: UsersOnChatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersOnChatsScalarFieldEnum | UsersOnChatsScalarFieldEnum[]
  }

  /**
   * User.administeredGroups
   */
  export type User$administeredGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroup
     */
    omit?: ChatGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
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
   * Model UsersOnChats
   */

  export type AggregateUsersOnChats = {
    _count: UsersOnChatsCountAggregateOutputType | null
    _avg: UsersOnChatsAvgAggregateOutputType | null
    _sum: UsersOnChatsSumAggregateOutputType | null
    _min: UsersOnChatsMinAggregateOutputType | null
    _max: UsersOnChatsMaxAggregateOutputType | null
  }

  export type UsersOnChatsAvgAggregateOutputType = {
    userId: number | null
    chatId: number | null
  }

  export type UsersOnChatsSumAggregateOutputType = {
    userId: number | null
    chatId: number | null
  }

  export type UsersOnChatsMinAggregateOutputType = {
    userId: number | null
    chatId: number | null
  }

  export type UsersOnChatsMaxAggregateOutputType = {
    userId: number | null
    chatId: number | null
  }

  export type UsersOnChatsCountAggregateOutputType = {
    userId: number
    chatId: number
    _all: number
  }


  export type UsersOnChatsAvgAggregateInputType = {
    userId?: true
    chatId?: true
  }

  export type UsersOnChatsSumAggregateInputType = {
    userId?: true
    chatId?: true
  }

  export type UsersOnChatsMinAggregateInputType = {
    userId?: true
    chatId?: true
  }

  export type UsersOnChatsMaxAggregateInputType = {
    userId?: true
    chatId?: true
  }

  export type UsersOnChatsCountAggregateInputType = {
    userId?: true
    chatId?: true
    _all?: true
  }

  export type UsersOnChatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnChats to aggregate.
     */
    where?: UsersOnChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnChats to fetch.
     */
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersOnChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersOnChats
    **/
    _count?: true | UsersOnChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersOnChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersOnChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersOnChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersOnChatsMaxAggregateInputType
  }

  export type GetUsersOnChatsAggregateType<T extends UsersOnChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersOnChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersOnChats[P]>
      : GetScalarType<T[P], AggregateUsersOnChats[P]>
  }




  export type UsersOnChatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersOnChatsWhereInput
    orderBy?: UsersOnChatsOrderByWithAggregationInput | UsersOnChatsOrderByWithAggregationInput[]
    by: UsersOnChatsScalarFieldEnum[] | UsersOnChatsScalarFieldEnum
    having?: UsersOnChatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersOnChatsCountAggregateInputType | true
    _avg?: UsersOnChatsAvgAggregateInputType
    _sum?: UsersOnChatsSumAggregateInputType
    _min?: UsersOnChatsMinAggregateInputType
    _max?: UsersOnChatsMaxAggregateInputType
  }

  export type UsersOnChatsGroupByOutputType = {
    userId: number
    chatId: number
    _count: UsersOnChatsCountAggregateOutputType | null
    _avg: UsersOnChatsAvgAggregateOutputType | null
    _sum: UsersOnChatsSumAggregateOutputType | null
    _min: UsersOnChatsMinAggregateOutputType | null
    _max: UsersOnChatsMaxAggregateOutputType | null
  }

  type GetUsersOnChatsGroupByPayload<T extends UsersOnChatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersOnChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersOnChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersOnChatsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersOnChatsGroupByOutputType[P]>
        }
      >
    >


  export type UsersOnChatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    chatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnChats"]>

  export type UsersOnChatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    chatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnChats"]>

  export type UsersOnChatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    chatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersOnChats"]>

  export type UsersOnChatsSelectScalar = {
    userId?: boolean
    chatId?: boolean
  }

  export type UsersOnChatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "chatId", ExtArgs["result"]["usersOnChats"]>
  export type UsersOnChatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type UsersOnChatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }
  export type UsersOnChatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }

  export type $UsersOnChatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersOnChats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      chatId: number
    }, ExtArgs["result"]["usersOnChats"]>
    composites: {}
  }

  type UsersOnChatsGetPayload<S extends boolean | null | undefined | UsersOnChatsDefaultArgs> = $Result.GetResult<Prisma.$UsersOnChatsPayload, S>

  type UsersOnChatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersOnChatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersOnChatsCountAggregateInputType | true
    }

  export interface UsersOnChatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersOnChats'], meta: { name: 'UsersOnChats' } }
    /**
     * Find zero or one UsersOnChats that matches the filter.
     * @param {UsersOnChatsFindUniqueArgs} args - Arguments to find a UsersOnChats
     * @example
     * // Get one UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersOnChatsFindUniqueArgs>(args: SelectSubset<T, UsersOnChatsFindUniqueArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersOnChats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersOnChatsFindUniqueOrThrowArgs} args - Arguments to find a UsersOnChats
     * @example
     * // Get one UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersOnChatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersOnChatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersOnChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsFindFirstArgs} args - Arguments to find a UsersOnChats
     * @example
     * // Get one UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersOnChatsFindFirstArgs>(args?: SelectSubset<T, UsersOnChatsFindFirstArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersOnChats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsFindFirstOrThrowArgs} args - Arguments to find a UsersOnChats
     * @example
     * // Get one UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersOnChatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersOnChatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersOnChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findMany()
     * 
     * // Get first 10 UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersOnChatsWithUserIdOnly = await prisma.usersOnChats.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersOnChatsFindManyArgs>(args?: SelectSubset<T, UsersOnChatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersOnChats.
     * @param {UsersOnChatsCreateArgs} args - Arguments to create a UsersOnChats.
     * @example
     * // Create one UsersOnChats
     * const UsersOnChats = await prisma.usersOnChats.create({
     *   data: {
     *     // ... data to create a UsersOnChats
     *   }
     * })
     * 
     */
    create<T extends UsersOnChatsCreateArgs>(args: SelectSubset<T, UsersOnChatsCreateArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersOnChats.
     * @param {UsersOnChatsCreateManyArgs} args - Arguments to create many UsersOnChats.
     * @example
     * // Create many UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersOnChatsCreateManyArgs>(args?: SelectSubset<T, UsersOnChatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersOnChats and returns the data saved in the database.
     * @param {UsersOnChatsCreateManyAndReturnArgs} args - Arguments to create many UsersOnChats.
     * @example
     * // Create many UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersOnChats and only return the `userId`
     * const usersOnChatsWithUserIdOnly = await prisma.usersOnChats.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersOnChatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersOnChatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersOnChats.
     * @param {UsersOnChatsDeleteArgs} args - Arguments to delete one UsersOnChats.
     * @example
     * // Delete one UsersOnChats
     * const UsersOnChats = await prisma.usersOnChats.delete({
     *   where: {
     *     // ... filter to delete one UsersOnChats
     *   }
     * })
     * 
     */
    delete<T extends UsersOnChatsDeleteArgs>(args: SelectSubset<T, UsersOnChatsDeleteArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersOnChats.
     * @param {UsersOnChatsUpdateArgs} args - Arguments to update one UsersOnChats.
     * @example
     * // Update one UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersOnChatsUpdateArgs>(args: SelectSubset<T, UsersOnChatsUpdateArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersOnChats.
     * @param {UsersOnChatsDeleteManyArgs} args - Arguments to filter UsersOnChats to delete.
     * @example
     * // Delete a few UsersOnChats
     * const { count } = await prisma.usersOnChats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersOnChatsDeleteManyArgs>(args?: SelectSubset<T, UsersOnChatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersOnChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersOnChatsUpdateManyArgs>(args: SelectSubset<T, UsersOnChatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersOnChats and returns the data updated in the database.
     * @param {UsersOnChatsUpdateManyAndReturnArgs} args - Arguments to update many UsersOnChats.
     * @example
     * // Update many UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersOnChats and only return the `userId`
     * const usersOnChatsWithUserIdOnly = await prisma.usersOnChats.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UsersOnChatsUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersOnChatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersOnChats.
     * @param {UsersOnChatsUpsertArgs} args - Arguments to update or create a UsersOnChats.
     * @example
     * // Update or create a UsersOnChats
     * const usersOnChats = await prisma.usersOnChats.upsert({
     *   create: {
     *     // ... data to create a UsersOnChats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersOnChats we want to update
     *   }
     * })
     */
    upsert<T extends UsersOnChatsUpsertArgs>(args: SelectSubset<T, UsersOnChatsUpsertArgs<ExtArgs>>): Prisma__UsersOnChatsClient<$Result.GetResult<Prisma.$UsersOnChatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersOnChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsCountArgs} args - Arguments to filter UsersOnChats to count.
     * @example
     * // Count the number of UsersOnChats
     * const count = await prisma.usersOnChats.count({
     *   where: {
     *     // ... the filter for the UsersOnChats we want to count
     *   }
     * })
    **/
    count<T extends UsersOnChatsCountArgs>(
      args?: Subset<T, UsersOnChatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersOnChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersOnChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersOnChatsAggregateArgs>(args: Subset<T, UsersOnChatsAggregateArgs>): Prisma.PrismaPromise<GetUsersOnChatsAggregateType<T>>

    /**
     * Group by UsersOnChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersOnChatsGroupByArgs} args - Group by arguments.
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
      T extends UsersOnChatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersOnChatsGroupByArgs['orderBy'] }
        : { orderBy?: UsersOnChatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersOnChatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersOnChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersOnChats model
   */
  readonly fields: UsersOnChatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersOnChats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersOnChatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersOnChats model
   */
  interface UsersOnChatsFieldRefs {
    readonly userId: FieldRef<"UsersOnChats", 'Int'>
    readonly chatId: FieldRef<"UsersOnChats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersOnChats findUnique
   */
  export type UsersOnChatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnChats to fetch.
     */
    where: UsersOnChatsWhereUniqueInput
  }

  /**
   * UsersOnChats findUniqueOrThrow
   */
  export type UsersOnChatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnChats to fetch.
     */
    where: UsersOnChatsWhereUniqueInput
  }

  /**
   * UsersOnChats findFirst
   */
  export type UsersOnChatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnChats to fetch.
     */
    where?: UsersOnChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnChats to fetch.
     */
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnChats.
     */
    cursor?: UsersOnChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnChats.
     */
    distinct?: UsersOnChatsScalarFieldEnum | UsersOnChatsScalarFieldEnum[]
  }

  /**
   * UsersOnChats findFirstOrThrow
   */
  export type UsersOnChatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnChats to fetch.
     */
    where?: UsersOnChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnChats to fetch.
     */
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersOnChats.
     */
    cursor?: UsersOnChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersOnChats.
     */
    distinct?: UsersOnChatsScalarFieldEnum | UsersOnChatsScalarFieldEnum[]
  }

  /**
   * UsersOnChats findMany
   */
  export type UsersOnChatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter, which UsersOnChats to fetch.
     */
    where?: UsersOnChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersOnChats to fetch.
     */
    orderBy?: UsersOnChatsOrderByWithRelationInput | UsersOnChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersOnChats.
     */
    cursor?: UsersOnChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersOnChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersOnChats.
     */
    skip?: number
    distinct?: UsersOnChatsScalarFieldEnum | UsersOnChatsScalarFieldEnum[]
  }

  /**
   * UsersOnChats create
   */
  export type UsersOnChatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersOnChats.
     */
    data: XOR<UsersOnChatsCreateInput, UsersOnChatsUncheckedCreateInput>
  }

  /**
   * UsersOnChats createMany
   */
  export type UsersOnChatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersOnChats.
     */
    data: UsersOnChatsCreateManyInput | UsersOnChatsCreateManyInput[]
  }

  /**
   * UsersOnChats createManyAndReturn
   */
  export type UsersOnChatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * The data used to create many UsersOnChats.
     */
    data: UsersOnChatsCreateManyInput | UsersOnChatsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersOnChats update
   */
  export type UsersOnChatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersOnChats.
     */
    data: XOR<UsersOnChatsUpdateInput, UsersOnChatsUncheckedUpdateInput>
    /**
     * Choose, which UsersOnChats to update.
     */
    where: UsersOnChatsWhereUniqueInput
  }

  /**
   * UsersOnChats updateMany
   */
  export type UsersOnChatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersOnChats.
     */
    data: XOR<UsersOnChatsUpdateManyMutationInput, UsersOnChatsUncheckedUpdateManyInput>
    /**
     * Filter which UsersOnChats to update
     */
    where?: UsersOnChatsWhereInput
    /**
     * Limit how many UsersOnChats to update.
     */
    limit?: number
  }

  /**
   * UsersOnChats updateManyAndReturn
   */
  export type UsersOnChatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * The data used to update UsersOnChats.
     */
    data: XOR<UsersOnChatsUpdateManyMutationInput, UsersOnChatsUncheckedUpdateManyInput>
    /**
     * Filter which UsersOnChats to update
     */
    where?: UsersOnChatsWhereInput
    /**
     * Limit how many UsersOnChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersOnChats upsert
   */
  export type UsersOnChatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersOnChats to update in case it exists.
     */
    where: UsersOnChatsWhereUniqueInput
    /**
     * In case the UsersOnChats found by the `where` argument doesn't exist, create a new UsersOnChats with this data.
     */
    create: XOR<UsersOnChatsCreateInput, UsersOnChatsUncheckedCreateInput>
    /**
     * In case the UsersOnChats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersOnChatsUpdateInput, UsersOnChatsUncheckedUpdateInput>
  }

  /**
   * UsersOnChats delete
   */
  export type UsersOnChatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
    /**
     * Filter which UsersOnChats to delete.
     */
    where: UsersOnChatsWhereUniqueInput
  }

  /**
   * UsersOnChats deleteMany
   */
  export type UsersOnChatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersOnChats to delete
     */
    where?: UsersOnChatsWhereInput
    /**
     * Limit how many UsersOnChats to delete.
     */
    limit?: number
  }

  /**
   * UsersOnChats without action
   */
  export type UsersOnChatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersOnChats
     */
    select?: UsersOnChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersOnChats
     */
    omit?: UsersOnChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersOnChatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    previewImage: 'previewImage',
    userId: 'userId',
    shown: 'shown',
    topic: 'topic'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    image: 'image',
    userId: 'userId',
    active: 'active',
    shown: 'shown'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isPersonalChat: 'isPersonalChat',
    avatar: 'avatar',
    adminId: 'adminId'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sentAt: 'sentAt',
    authorId: 'authorId',
    chatGroupId: 'chatGroupId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    accepted: 'accepted',
    profile1Id: 'profile1Id',
    profile2Id: 'profile2Id'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    file: 'file',
    uploadedAt: 'uploadedAt',
    postId: 'postId',
    albumId: 'albumId',
    messageId: 'messageId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topic: 'topic',
    tags: 'tags',
    content: 'content',
    views: 'views',
    likes: 'likes',
    userId: 'userId',
    links: 'links'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


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


  export const UsersOnChatsScalarFieldEnum: {
    userId: 'userId',
    chatId: 'chatId'
  };

  export type UsersOnChatsScalarFieldEnum = (typeof UsersOnChatsScalarFieldEnum)[keyof typeof UsersOnChatsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    name?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    previewImage?: StringNullableFilter<"Album"> | string | null
    userId?: IntFilter<"Album"> | number
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringFilter<"Album"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    userId?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
    user?: UserOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    name?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    previewImage?: StringNullableFilter<"Album"> | string | null
    userId?: IntFilter<"Album"> | number
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringFilter<"Album"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    previewImage?: SortOrderInput | SortOrder
    userId?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    name?: StringWithAggregatesFilter<"Album"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    previewImage?: StringNullableWithAggregatesFilter<"Album"> | string | null
    userId?: IntWithAggregatesFilter<"Album"> | number
    shown?: BoolWithAggregatesFilter<"Album"> | boolean
    topic?: StringWithAggregatesFilter<"Album"> | string
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    image?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
    active?: BoolFilter<"Avatar"> | boolean
    shown?: BoolFilter<"Avatar"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    shown?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    image?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
    active?: BoolFilter<"Avatar"> | boolean
    shown?: BoolFilter<"Avatar"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    shown?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avatar"> | number
    image?: StringWithAggregatesFilter<"Avatar"> | string
    userId?: IntWithAggregatesFilter<"Avatar"> | number
    active?: BoolWithAggregatesFilter<"Avatar"> | boolean
    shown?: BoolWithAggregatesFilter<"Avatar"> | boolean
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: IntFilter<"ChatGroup"> | number
    name?: StringNullableFilter<"ChatGroup"> | string | null
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    avatar?: StringNullableFilter<"ChatGroup"> | string | null
    adminId?: IntFilter<"ChatGroup"> | number
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UsersOnChatsListRelationFilter
    messages?: ChatMessageListRelationFilter
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isPersonalChat?: SortOrder
    avatar?: SortOrderInput | SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
    members?: UsersOnChatsOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    name?: StringNullableFilter<"ChatGroup"> | string | null
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    avatar?: StringNullableFilter<"ChatGroup"> | string | null
    adminId?: IntFilter<"ChatGroup"> | number
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UsersOnChatsListRelationFilter
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isPersonalChat?: SortOrder
    avatar?: SortOrderInput | SortOrder
    adminId?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _avg?: ChatGroupAvgOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
    _sum?: ChatGroupSumOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroup"> | number
    name?: StringNullableWithAggregatesFilter<"ChatGroup"> | string | null
    isPersonalChat?: BoolWithAggregatesFilter<"ChatGroup"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"ChatGroup"> | string | null
    adminId?: IntWithAggregatesFilter<"ChatGroup"> | number
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
    attachedImage?: ImageListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    attachedImage?: ImageOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
    attachedImage?: ImageListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    sentAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    authorId?: IntWithAggregatesFilter<"ChatMessage"> | number
    chatGroupId?: IntWithAggregatesFilter<"ChatMessage"> | number
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: IntFilter<"Friendship"> | number
    accepted?: BoolFilter<"Friendship"> | boolean
    profile1Id?: IntFilter<"Friendship"> | number
    profile2Id?: IntFilter<"Friendship"> | number
    profile1?: XOR<UserScalarRelationFilter, UserWhereInput>
    profile2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    accepted?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
    profile1?: UserOrderByWithRelationInput
    profile2?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    accepted?: BoolFilter<"Friendship"> | boolean
    profile1Id?: IntFilter<"Friendship"> | number
    profile2Id?: IntFilter<"Friendship"> | number
    profile1?: XOR<UserScalarRelationFilter, UserWhereInput>
    profile2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    accepted?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _avg?: FriendshipAvgOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
    _sum?: FriendshipSumOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friendship"> | number
    accepted?: BoolWithAggregatesFilter<"Friendship"> | boolean
    profile1Id?: IntWithAggregatesFilter<"Friendship"> | number
    profile2Id?: IntWithAggregatesFilter<"Friendship"> | number
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    filename?: StringFilter<"Image"> | string
    file?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    postId?: IntNullableFilter<"Image"> | number | null
    albumId?: IntNullableFilter<"Image"> | number | null
    messageId?: IntNullableFilter<"Image"> | number | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    message?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    uploadedAt?: SortOrder
    postId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    post?: PostOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
    message?: ChatMessageOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    filename?: StringFilter<"Image"> | string
    file?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    postId?: IntNullableFilter<"Image"> | number | null
    albumId?: IntNullableFilter<"Image"> | number | null
    messageId?: IntNullableFilter<"Image"> | number | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
    message?: XOR<ChatMessageNullableScalarRelationFilter, ChatMessageWhereInput> | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    uploadedAt?: SortOrder
    postId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    messageId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    filename?: StringWithAggregatesFilter<"Image"> | string
    file?: StringWithAggregatesFilter<"Image"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    postId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    messageId?: IntNullableWithAggregatesFilter<"Image"> | number | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    url?: StringFilter<"Link"> | string
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    url?: StringFilter<"Link"> | string
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    url?: StringWithAggregatesFilter<"Link"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    topic?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    links?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    content?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    links?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    topic?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    links?: StringNullableFilter<"Post"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ImageListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    content?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    links?: SortOrderInput | SortOrder
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
    topic?: StringNullableWithAggregatesFilter<"Post"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Post"> | string | null
    content?: StringWithAggregatesFilter<"Post"> | string
    views?: IntWithAggregatesFilter<"Post"> | number
    likes?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    links?: StringNullableWithAggregatesFilter<"Post"> | string | null
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
    posts?: PostListRelationFilter
    albums?: AlbumListRelationFilter
    sentRequests?: FriendshipListRelationFilter
    receivedRequests?: FriendshipListRelationFilter
    avatars?: AvatarListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    chatGroups?: UsersOnChatsListRelationFilter
    administeredGroups?: ChatGroupListRelationFilter
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
    posts?: PostOrderByRelationAggregateInput
    albums?: AlbumOrderByRelationAggregateInput
    sentRequests?: FriendshipOrderByRelationAggregateInput
    receivedRequests?: FriendshipOrderByRelationAggregateInput
    avatars?: AvatarOrderByRelationAggregateInput
    sentMessages?: ChatMessageOrderByRelationAggregateInput
    chatGroups?: UsersOnChatsOrderByRelationAggregateInput
    administeredGroups?: ChatGroupOrderByRelationAggregateInput
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
    posts?: PostListRelationFilter
    albums?: AlbumListRelationFilter
    sentRequests?: FriendshipListRelationFilter
    receivedRequests?: FriendshipListRelationFilter
    avatars?: AvatarListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    chatGroups?: UsersOnChatsListRelationFilter
    administeredGroups?: ChatGroupListRelationFilter
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

  export type UsersOnChatsWhereInput = {
    AND?: UsersOnChatsWhereInput | UsersOnChatsWhereInput[]
    OR?: UsersOnChatsWhereInput[]
    NOT?: UsersOnChatsWhereInput | UsersOnChatsWhereInput[]
    userId?: IntFilter<"UsersOnChats"> | number
    chatId?: IntFilter<"UsersOnChats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }

  export type UsersOnChatsOrderByWithRelationInput = {
    userId?: SortOrder
    chatId?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatGroupOrderByWithRelationInput
  }

  export type UsersOnChatsWhereUniqueInput = Prisma.AtLeast<{
    userId_chatId?: UsersOnChatsUserIdChatIdCompoundUniqueInput
    AND?: UsersOnChatsWhereInput | UsersOnChatsWhereInput[]
    OR?: UsersOnChatsWhereInput[]
    NOT?: UsersOnChatsWhereInput | UsersOnChatsWhereInput[]
    userId?: IntFilter<"UsersOnChats"> | number
    chatId?: IntFilter<"UsersOnChats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatGroupScalarRelationFilter, ChatGroupWhereInput>
  }, "userId_chatId">

  export type UsersOnChatsOrderByWithAggregationInput = {
    userId?: SortOrder
    chatId?: SortOrder
    _count?: UsersOnChatsCountOrderByAggregateInput
    _avg?: UsersOnChatsAvgOrderByAggregateInput
    _max?: UsersOnChatsMaxOrderByAggregateInput
    _min?: UsersOnChatsMinOrderByAggregateInput
    _sum?: UsersOnChatsSumOrderByAggregateInput
  }

  export type UsersOnChatsScalarWhereWithAggregatesInput = {
    AND?: UsersOnChatsScalarWhereWithAggregatesInput | UsersOnChatsScalarWhereWithAggregatesInput[]
    OR?: UsersOnChatsScalarWhereWithAggregatesInput[]
    NOT?: UsersOnChatsScalarWhereWithAggregatesInput | UsersOnChatsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UsersOnChats"> | number
    chatId?: IntWithAggregatesFilter<"UsersOnChats"> | number
  }

  export type AlbumCreateInput = {
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    shown?: boolean
    topic: string
    user: UserCreateNestedOneWithoutAlbumsInput
    images?: ImageCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    userId: number
    shown?: boolean
    topic: string
    images?: ImageUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    images?: ImageUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    userId: number
    shown?: boolean
    topic: string
  }

  export type AlbumUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarCreateInput = {
    image: string
    active?: boolean
    shown?: boolean
    user: UserCreateNestedOneWithoutAvatarsInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: number
    image: string
    userId: number
    active?: boolean
    shown?: boolean
  }

  export type AvatarUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarCreateManyInput = {
    id?: number
    image: string
    userId: number
    active?: boolean
    shown?: boolean
  }

  export type AvatarUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatGroupCreateInput = {
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    admin: UserCreateNestedOneWithoutAdministeredGroupsInput
    members?: UsersOnChatsCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    adminId: number
    members?: UsersOnChatsUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: UserUpdateOneRequiredWithoutAdministeredGroupsNestedInput
    members?: UsersOnChatsUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    members?: UsersOnChatsUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    adminId: number
  }

  export type ChatGroupUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageCreateInput = {
    content: string
    sentAt?: Date | string
    attachedImage?: ImageCreateNestedManyWithoutMessageInput
    author: UserCreateNestedOneWithoutSentMessagesInput
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    chatGroupId: number
    attachedImage?: ImageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: ImageUpdateManyWithoutMessageNestedInput
    author?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: ImageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    chatGroupId: number
  }

  export type ChatMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipCreateInput = {
    accepted?: boolean
    profile1: UserCreateNestedOneWithoutSentRequestsInput
    profile2: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: number
    accepted?: boolean
    profile1Id: number
    profile2Id: number
  }

  export type FriendshipUpdateInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    profile2?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1Id?: IntFieldUpdateOperationsInput | number
    profile2Id?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipCreateManyInput = {
    id?: number
    accepted?: boolean
    profile1Id: number
    profile2Id: number
  }

  export type FriendshipUpdateManyMutationInput = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1Id?: IntFieldUpdateOperationsInput | number
    profile2Id?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateInput = {
    filename: string
    file?: string
    uploadedAt?: Date | string
    post?: PostCreateNestedOneWithoutImagesInput
    album?: AlbumCreateNestedOneWithoutImagesInput
    message?: ChatMessageCreateNestedOneWithoutAttachedImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    albumId?: number | null
    messageId?: number | null
  }

  export type ImageUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutImagesNestedInput
    album?: AlbumUpdateOneWithoutImagesNestedInput
    message?: ChatMessageUpdateOneWithoutAttachedImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateManyInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    albumId?: number | null
    messageId?: number | null
  }

  export type ImageUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LinkCreateInput = {
    url: string
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    url: string
  }

  export type LinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkCreateManyInput = {
    id?: number
    url: string
  }

  export type LinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    links?: string | null
    user: UserCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    userId: number
    links?: string | null
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    images?: ImageUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    userId: number
    links?: string | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
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
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
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
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
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

  export type UsersOnChatsCreateInput = {
    user: UserCreateNestedOneWithoutChatGroupsInput
    chat: ChatGroupCreateNestedOneWithoutMembersInput
  }

  export type UsersOnChatsUncheckedCreateInput = {
    userId: number
    chatId: number
  }

  export type UsersOnChatsUpdateInput = {
    user?: UserUpdateOneRequiredWithoutChatGroupsNestedInput
    chat?: ChatGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UsersOnChatsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersOnChatsCreateManyInput = {
    userId: number
    chatId: number
  }

  export type UsersOnChatsUpdateManyMutationInput = {

  }

  export type UsersOnChatsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    previewImage?: SortOrder
    userId?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    previewImage?: SortOrder
    userId?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    previewImage?: SortOrder
    userId?: SortOrder
    shown?: SortOrder
    topic?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    shown?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    shown?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    shown?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UsersOnChatsListRelationFilter = {
    every?: UsersOnChatsWhereInput
    some?: UsersOnChatsWhereInput
    none?: UsersOnChatsWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type UsersOnChatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    avatar?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    avatar?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isPersonalChat?: SortOrder
    avatar?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type ChatGroupScalarRelationFilter = {
    is?: ChatGroupWhereInput
    isNot?: ChatGroupWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    chatGroupId?: SortOrder
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
  }

  export type FriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    accepted?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
  }

  export type FriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    profile1Id?: SortOrder
    profile2Id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type ChatMessageNullableScalarRelationFilter = {
    is?: ChatMessageWhereInput | null
    isNot?: ChatMessageWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    uploadedAt?: SortOrder
    postId?: SortOrder
    albumId?: SortOrder
    messageId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    albumId?: SortOrder
    messageId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    uploadedAt?: SortOrder
    postId?: SortOrder
    albumId?: SortOrder
    messageId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    file?: SortOrder
    uploadedAt?: SortOrder
    postId?: SortOrder
    albumId?: SortOrder
    messageId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    albumId?: SortOrder
    messageId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    links?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    links?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    tags?: SortOrder
    content?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
    links?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    userId?: SortOrder
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type AvatarListRelationFilter = {
    every?: AvatarWhereInput
    some?: AvatarWhereInput
    none?: AvatarWhereInput
  }

  export type ChatGroupListRelationFilter = {
    every?: ChatGroupWhereInput
    some?: ChatGroupWhereInput
    none?: ChatGroupWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupOrderByRelationAggregateInput = {
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

  export type UsersOnChatsUserIdChatIdCompoundUniqueInput = {
    userId: number
    chatId: number
  }

  export type UsersOnChatsCountOrderByAggregateInput = {
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type UsersOnChatsAvgOrderByAggregateInput = {
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type UsersOnChatsMaxOrderByAggregateInput = {
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type UsersOnChatsMinOrderByAggregateInput = {
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type UsersOnChatsSumOrderByAggregateInput = {
    userId?: SortOrder
    chatId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    createMany?: ImageCreateManyAlbumInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    createMany?: ImageCreateManyAlbumInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    upsert?: UserUpsertWithoutAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlbumsInput, UserUpdateWithoutAlbumsInput>, UserUncheckedUpdateWithoutAlbumsInput>
  }

  export type ImageUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAlbumInput | ImageUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ImageCreateManyAlbumInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAlbumInput | ImageUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAlbumInput | ImageUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput> | ImageCreateWithoutAlbumInput[] | ImageUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutAlbumInput | ImageCreateOrConnectWithoutAlbumInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutAlbumInput | ImageUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ImageCreateManyAlbumInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutAlbumInput | ImageUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutAlbumInput | ImageUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAvatarsInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvatarsNestedInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    upsert?: UserUpsertWithoutAvatarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarsInput, UserUpdateWithoutAvatarsInput>, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type UserCreateNestedOneWithoutAdministeredGroupsInput = {
    create?: XOR<UserCreateWithoutAdministeredGroupsInput, UserUncheckedCreateWithoutAdministeredGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdministeredGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type UsersOnChatsCreateNestedManyWithoutChatInput = {
    create?: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput> | UsersOnChatsCreateWithoutChatInput[] | UsersOnChatsUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutChatInput | UsersOnChatsCreateOrConnectWithoutChatInput[]
    createMany?: UsersOnChatsCreateManyChatInputEnvelope
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UsersOnChatsUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput> | UsersOnChatsCreateWithoutChatInput[] | UsersOnChatsUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutChatInput | UsersOnChatsCreateOrConnectWithoutChatInput[]
    createMany?: UsersOnChatsCreateManyChatInputEnvelope
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAdministeredGroupsNestedInput = {
    create?: XOR<UserCreateWithoutAdministeredGroupsInput, UserUncheckedCreateWithoutAdministeredGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdministeredGroupsInput
    upsert?: UserUpsertWithoutAdministeredGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdministeredGroupsInput, UserUpdateWithoutAdministeredGroupsInput>, UserUncheckedUpdateWithoutAdministeredGroupsInput>
  }

  export type UsersOnChatsUpdateManyWithoutChatNestedInput = {
    create?: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput> | UsersOnChatsCreateWithoutChatInput[] | UsersOnChatsUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutChatInput | UsersOnChatsCreateOrConnectWithoutChatInput[]
    upsert?: UsersOnChatsUpsertWithWhereUniqueWithoutChatInput | UsersOnChatsUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: UsersOnChatsCreateManyChatInputEnvelope
    set?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    disconnect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    delete?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    update?: UsersOnChatsUpdateWithWhereUniqueWithoutChatInput | UsersOnChatsUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: UsersOnChatsUpdateManyWithWhereWithoutChatInput | UsersOnChatsUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UsersOnChatsUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput> | UsersOnChatsCreateWithoutChatInput[] | UsersOnChatsUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutChatInput | UsersOnChatsCreateOrConnectWithoutChatInput[]
    upsert?: UsersOnChatsUpsertWithWhereUniqueWithoutChatInput | UsersOnChatsUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: UsersOnChatsCreateManyChatInputEnvelope
    set?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    disconnect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    delete?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    update?: UsersOnChatsUpdateWithWhereUniqueWithoutChatInput | UsersOnChatsUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: UsersOnChatsUpdateManyWithWhereWithoutChatInput | UsersOnChatsUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutMessageInput = {
    create?: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput> | ImageCreateWithoutMessageInput[] | ImageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMessageInput | ImageCreateOrConnectWithoutMessageInput[]
    createMany?: ImageCreateManyMessageInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput> | ImageCreateWithoutMessageInput[] | ImageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMessageInput | ImageCreateOrConnectWithoutMessageInput[]
    createMany?: ImageCreateManyMessageInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput> | ImageCreateWithoutMessageInput[] | ImageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMessageInput | ImageCreateOrConnectWithoutMessageInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMessageInput | ImageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ImageCreateManyMessageInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMessageInput | ImageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMessageInput | ImageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    upsert?: ChatGroupUpsertWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMessagesInput, ChatGroupUpdateWithoutMessagesInput>, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ImageUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput> | ImageCreateWithoutMessageInput[] | ImageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutMessageInput | ImageCreateOrConnectWithoutMessageInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutMessageInput | ImageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ImageCreateManyMessageInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutMessageInput | ImageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutMessageInput | ImageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type PostCreateNestedOneWithoutImagesInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    connect?: PostWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutImagesInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput
    connect?: AlbumWhereUniqueInput
  }

  export type ChatMessageCreateNestedOneWithoutAttachedImageInput = {
    create?: XOR<ChatMessageCreateWithoutAttachedImageInput, ChatMessageUncheckedCreateWithoutAttachedImageInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAttachedImageInput
    connect?: ChatMessageWhereUniqueInput
  }

  export type PostUpdateOneWithoutImagesNestedInput = {
    create?: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagesInput
    upsert?: PostUpsertWithoutImagesInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImagesInput, PostUpdateWithoutImagesInput>, PostUncheckedUpdateWithoutImagesInput>
  }

  export type AlbumUpdateOneWithoutImagesNestedInput = {
    create?: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutImagesInput
    upsert?: AlbumUpsertWithoutImagesInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutImagesInput, AlbumUpdateWithoutImagesInput>, AlbumUncheckedUpdateWithoutImagesInput>
  }

  export type ChatMessageUpdateOneWithoutAttachedImageNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAttachedImageInput, ChatMessageUncheckedCreateWithoutAttachedImageInput>
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAttachedImageInput
    upsert?: ChatMessageUpsertWithoutAttachedImageInput
    disconnect?: ChatMessageWhereInput | boolean
    delete?: ChatMessageWhereInput | boolean
    connect?: ChatMessageWhereUniqueInput
    update?: XOR<XOR<ChatMessageUpdateToOneWithWhereWithoutAttachedImageInput, ChatMessageUpdateWithoutAttachedImageInput>, ChatMessageUncheckedUpdateWithoutAttachedImageInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ImageUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput> | ImageCreateWithoutPostInput[] | ImageUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutPostInput | ImageCreateOrConnectWithoutPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutPostInput | ImageUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImageCreateManyPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutPostInput | ImageUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutPostInput | ImageUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutProfile1Input = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutProfile2Input = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UsersOnChatsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput> | UsersOnChatsCreateWithoutUserInput[] | UsersOnChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutUserInput | UsersOnChatsCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnChatsCreateManyUserInputEnvelope
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
  }

  export type ChatGroupCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutProfile1Input = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutProfile2Input = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UsersOnChatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput> | UsersOnChatsCreateWithoutUserInput[] | UsersOnChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutUserInput | UsersOnChatsCreateOrConnectWithoutUserInput[]
    createMany?: UsersOnChatsCreateManyUserInputEnvelope
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
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

  export type AlbumUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserInput | AlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserInput | AlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserInput | AlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutProfile1NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile1Input | FriendshipUpsertWithWhereUniqueWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile1Input | FriendshipUpdateWithWhereUniqueWithoutProfile1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile1Input | FriendshipUpdateManyWithWhereWithoutProfile1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutProfile2NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile2Input | FriendshipUpsertWithWhereUniqueWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile2Input | FriendshipUpdateWithWhereUniqueWithoutProfile2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile2Input | FriendshipUpdateManyWithWhereWithoutProfile2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UsersOnChatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput> | UsersOnChatsCreateWithoutUserInput[] | UsersOnChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutUserInput | UsersOnChatsCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnChatsUpsertWithWhereUniqueWithoutUserInput | UsersOnChatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnChatsCreateManyUserInputEnvelope
    set?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    disconnect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    delete?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    update?: UsersOnChatsUpdateWithWhereUniqueWithoutUserInput | UsersOnChatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnChatsUpdateManyWithWhereWithoutUserInput | UsersOnChatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
  }

  export type ChatGroupUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAdminInput | ChatGroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAdminInput | ChatGroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAdminInput | ChatGroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
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

  export type AlbumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput> | AlbumCreateWithoutUserInput[] | AlbumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutUserInput | AlbumCreateOrConnectWithoutUserInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutUserInput | AlbumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlbumCreateManyUserInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutUserInput | AlbumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutUserInput | AlbumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile1NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input> | FriendshipCreateWithoutProfile1Input[] | FriendshipUncheckedCreateWithoutProfile1Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile1Input | FriendshipCreateOrConnectWithoutProfile1Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile1Input | FriendshipUpsertWithWhereUniqueWithoutProfile1Input[]
    createMany?: FriendshipCreateManyProfile1InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile1Input | FriendshipUpdateWithWhereUniqueWithoutProfile1Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile1Input | FriendshipUpdateManyWithWhereWithoutProfile1Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile2NestedInput = {
    create?: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input> | FriendshipCreateWithoutProfile2Input[] | FriendshipUncheckedCreateWithoutProfile2Input[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutProfile2Input | FriendshipCreateOrConnectWithoutProfile2Input[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutProfile2Input | FriendshipUpsertWithWhereUniqueWithoutProfile2Input[]
    createMany?: FriendshipCreateManyProfile2InputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutProfile2Input | FriendshipUpdateWithWhereUniqueWithoutProfile2Input[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutProfile2Input | FriendshipUpdateManyWithWhereWithoutProfile2Input[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput> | UsersOnChatsCreateWithoutUserInput[] | UsersOnChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersOnChatsCreateOrConnectWithoutUserInput | UsersOnChatsCreateOrConnectWithoutUserInput[]
    upsert?: UsersOnChatsUpsertWithWhereUniqueWithoutUserInput | UsersOnChatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersOnChatsCreateManyUserInputEnvelope
    set?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    disconnect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    delete?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    connect?: UsersOnChatsWhereUniqueInput | UsersOnChatsWhereUniqueInput[]
    update?: UsersOnChatsUpdateWithWhereUniqueWithoutUserInput | UsersOnChatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersOnChatsUpdateManyWithWhereWithoutUserInput | UsersOnChatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
  }

  export type ChatGroupUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput> | ChatGroupCreateWithoutAdminInput[] | ChatGroupUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutAdminInput | ChatGroupCreateOrConnectWithoutAdminInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutAdminInput | ChatGroupUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ChatGroupCreateManyAdminInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutAdminInput | ChatGroupUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutAdminInput | ChatGroupUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatGroupsInput = {
    create?: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatGroupsNestedInput = {
    create?: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatGroupsInput
    upsert?: UserUpsertWithoutChatGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatGroupsInput, UserUpdateWithoutChatGroupsInput>, UserUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput
    upsert?: ChatGroupUpsertWithoutMembersInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMembersInput, ChatGroupUpdateWithoutMembersInput>, ChatGroupUncheckedUpdateWithoutMembersInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutAlbumsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
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
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlbumsInput, UserUncheckedCreateWithoutAlbumsInput>
  }

  export type ImageCreateWithoutAlbumInput = {
    filename: string
    file?: string
    uploadedAt?: Date | string
    post?: PostCreateNestedOneWithoutImagesInput
    message?: ChatMessageCreateNestedOneWithoutAttachedImageInput
  }

  export type ImageUncheckedCreateWithoutAlbumInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    messageId?: number | null
  }

  export type ImageCreateOrConnectWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput>
  }

  export type ImageCreateManyAlbumInputEnvelope = {
    data: ImageCreateManyAlbumInput | ImageCreateManyAlbumInput[]
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
    posts?: PostUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
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
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutAlbumInput, ImageUncheckedUpdateWithoutAlbumInput>
    create: XOR<ImageCreateWithoutAlbumInput, ImageUncheckedCreateWithoutAlbumInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutAlbumInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutAlbumInput, ImageUncheckedUpdateWithoutAlbumInput>
  }

  export type ImageUpdateManyWithWhereWithoutAlbumInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    filename?: StringFilter<"Image"> | string
    file?: StringFilter<"Image"> | string
    uploadedAt?: DateTimeFilter<"Image"> | Date | string
    postId?: IntNullableFilter<"Image"> | number | null
    albumId?: IntNullableFilter<"Image"> | number | null
    messageId?: IntNullableFilter<"Image"> | number | null
  }

  export type UserCreateWithoutAvatarsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutAvatarsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAvatarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
  }

  export type UserUpsertWithoutAvatarsInput = {
    update: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type UserUpdateWithoutAvatarsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutAdministeredGroupsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdministeredGroupsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdministeredGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdministeredGroupsInput, UserUncheckedCreateWithoutAdministeredGroupsInput>
  }

  export type UsersOnChatsCreateWithoutChatInput = {
    user: UserCreateNestedOneWithoutChatGroupsInput
  }

  export type UsersOnChatsUncheckedCreateWithoutChatInput = {
    userId: number
  }

  export type UsersOnChatsCreateOrConnectWithoutChatInput = {
    where: UsersOnChatsWhereUniqueInput
    create: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput>
  }

  export type UsersOnChatsCreateManyChatInputEnvelope = {
    data: UsersOnChatsCreateManyChatInput | UsersOnChatsCreateManyChatInput[]
  }

  export type ChatMessageCreateWithoutChatGroupInput = {
    content: string
    sentAt?: Date | string
    attachedImage?: ImageCreateNestedManyWithoutMessageInput
    author: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatGroupInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    attachedImage?: ImageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageCreateManyChatGroupInputEnvelope = {
    data: ChatMessageCreateManyChatGroupInput | ChatMessageCreateManyChatGroupInput[]
  }

  export type UserUpsertWithoutAdministeredGroupsInput = {
    update: XOR<UserUpdateWithoutAdministeredGroupsInput, UserUncheckedUpdateWithoutAdministeredGroupsInput>
    create: XOR<UserCreateWithoutAdministeredGroupsInput, UserUncheckedCreateWithoutAdministeredGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdministeredGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdministeredGroupsInput, UserUncheckedUpdateWithoutAdministeredGroupsInput>
  }

  export type UserUpdateWithoutAdministeredGroupsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdministeredGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersOnChatsUpsertWithWhereUniqueWithoutChatInput = {
    where: UsersOnChatsWhereUniqueInput
    update: XOR<UsersOnChatsUpdateWithoutChatInput, UsersOnChatsUncheckedUpdateWithoutChatInput>
    create: XOR<UsersOnChatsCreateWithoutChatInput, UsersOnChatsUncheckedCreateWithoutChatInput>
  }

  export type UsersOnChatsUpdateWithWhereUniqueWithoutChatInput = {
    where: UsersOnChatsWhereUniqueInput
    data: XOR<UsersOnChatsUpdateWithoutChatInput, UsersOnChatsUncheckedUpdateWithoutChatInput>
  }

  export type UsersOnChatsUpdateManyWithWhereWithoutChatInput = {
    where: UsersOnChatsScalarWhereInput
    data: XOR<UsersOnChatsUpdateManyMutationInput, UsersOnChatsUncheckedUpdateManyWithoutChatInput>
  }

  export type UsersOnChatsScalarWhereInput = {
    AND?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
    OR?: UsersOnChatsScalarWhereInput[]
    NOT?: UsersOnChatsScalarWhereInput | UsersOnChatsScalarWhereInput[]
    userId?: IntFilter<"UsersOnChats"> | number
    chatId?: IntFilter<"UsersOnChats"> | number
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatGroupInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    content?: StringFilter<"ChatMessage"> | string
    sentAt?: DateTimeFilter<"ChatMessage"> | Date | string
    authorId?: IntFilter<"ChatMessage"> | number
    chatGroupId?: IntFilter<"ChatMessage"> | number
  }

  export type ImageCreateWithoutMessageInput = {
    filename: string
    file?: string
    uploadedAt?: Date | string
    post?: PostCreateNestedOneWithoutImagesInput
    album?: AlbumCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutMessageInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    albumId?: number | null
  }

  export type ImageCreateOrConnectWithoutMessageInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput>
  }

  export type ImageCreateManyMessageInputEnvelope = {
    data: ImageCreateManyMessageInput | ImageCreateManyMessageInput[]
  }

  export type UserCreateWithoutSentMessagesInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type ChatGroupCreateWithoutMessagesInput = {
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    admin: UserCreateNestedOneWithoutAdministeredGroupsInput
    members?: UsersOnChatsCreateNestedManyWithoutChatInput
  }

  export type ChatGroupUncheckedCreateWithoutMessagesInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    adminId: number
    members?: UsersOnChatsUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatGroupCreateOrConnectWithoutMessagesInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutMessageInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutMessageInput, ImageUncheckedUpdateWithoutMessageInput>
    create: XOR<ImageCreateWithoutMessageInput, ImageUncheckedCreateWithoutMessageInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutMessageInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutMessageInput, ImageUncheckedUpdateWithoutMessageInput>
  }

  export type ImageUpdateManyWithWhereWithoutMessageInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutMessageInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChatGroupUpsertWithoutMessagesInput = {
    update: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUpdateWithoutMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: UserUpdateOneRequiredWithoutAdministeredGroupsNestedInput
    members?: UsersOnChatsUpdateManyWithoutChatNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    members?: UsersOnChatsUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutSentRequestsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PostCreateWithoutImagesInput = {
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    links?: string | null
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    userId: number
    links?: string | null
  }

  export type PostCreateOrConnectWithoutImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type AlbumCreateWithoutImagesInput = {
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    shown?: boolean
    topic: string
    user: UserCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    userId: number
    shown?: boolean
    topic: string
  }

  export type AlbumCreateOrConnectWithoutImagesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
  }

  export type ChatMessageCreateWithoutAttachedImageInput = {
    content: string
    sentAt?: Date | string
    author: UserCreateNestedOneWithoutSentMessagesInput
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutAttachedImageInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
    chatGroupId: number
  }

  export type ChatMessageCreateOrConnectWithoutAttachedImageInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutAttachedImageInput, ChatMessageUncheckedCreateWithoutAttachedImageInput>
  }

  export type PostUpsertWithoutImagesInput = {
    update: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImagesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
  }

  export type PostUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUpsertWithoutImagesInput = {
    update: XOR<AlbumUpdateWithoutImagesInput, AlbumUncheckedUpdateWithoutImagesInput>
    create: XOR<AlbumCreateWithoutImagesInput, AlbumUncheckedCreateWithoutImagesInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutImagesInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutImagesInput, AlbumUncheckedUpdateWithoutImagesInput>
  }

  export type AlbumUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpsertWithoutAttachedImageInput = {
    update: XOR<ChatMessageUpdateWithoutAttachedImageInput, ChatMessageUncheckedUpdateWithoutAttachedImageInput>
    create: XOR<ChatMessageCreateWithoutAttachedImageInput, ChatMessageUncheckedCreateWithoutAttachedImageInput>
    where?: ChatMessageWhereInput
  }

  export type ChatMessageUpdateToOneWithWhereWithoutAttachedImageInput = {
    where?: ChatMessageWhereInput
    data: XOR<ChatMessageUpdateWithoutAttachedImageInput, ChatMessageUncheckedUpdateWithoutAttachedImageInput>
  }

  export type ChatMessageUpdateWithoutAttachedImageInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutAttachedImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPostsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
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
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    chatGroups?: UsersOnChatsUncheckedCreateNestedManyWithoutUserInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ImageCreateWithoutPostInput = {
    filename: string
    file?: string
    uploadedAt?: Date | string
    album?: AlbumCreateNestedOneWithoutImagesInput
    message?: ChatMessageCreateNestedOneWithoutAttachedImageInput
  }

  export type ImageUncheckedCreateWithoutPostInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    albumId?: number | null
    messageId?: number | null
  }

  export type ImageCreateOrConnectWithoutPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageCreateManyPostInputEnvelope = {
    data: ImageCreateManyPostInput | ImageCreateManyPostInput[]
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
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
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
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    chatGroups?: UsersOnChatsUncheckedUpdateManyWithoutUserNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutUserInput = {
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    links?: string | null
    images?: ImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    links?: string | null
    images?: ImageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
  }

  export type AlbumCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    shown?: boolean
    topic: string
    images?: ImageCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    shown?: boolean
    topic: string
    images?: ImageUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutUserInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput>
  }

  export type AlbumCreateManyUserInputEnvelope = {
    data: AlbumCreateManyUserInput | AlbumCreateManyUserInput[]
  }

  export type FriendshipCreateWithoutProfile1Input = {
    accepted?: boolean
    profile2: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type FriendshipUncheckedCreateWithoutProfile1Input = {
    id?: number
    accepted?: boolean
    profile2Id: number
  }

  export type FriendshipCreateOrConnectWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input>
  }

  export type FriendshipCreateManyProfile1InputEnvelope = {
    data: FriendshipCreateManyProfile1Input | FriendshipCreateManyProfile1Input[]
  }

  export type FriendshipCreateWithoutProfile2Input = {
    accepted?: boolean
    profile1: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type FriendshipUncheckedCreateWithoutProfile2Input = {
    id?: number
    accepted?: boolean
    profile1Id: number
  }

  export type FriendshipCreateOrConnectWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input>
  }

  export type FriendshipCreateManyProfile2InputEnvelope = {
    data: FriendshipCreateManyProfile2Input | FriendshipCreateManyProfile2Input[]
  }

  export type AvatarCreateWithoutUserInput = {
    image: string
    active?: boolean
    shown?: boolean
  }

  export type AvatarUncheckedCreateWithoutUserInput = {
    id?: number
    image: string
    active?: boolean
    shown?: boolean
  }

  export type AvatarCreateOrConnectWithoutUserInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarCreateManyUserInputEnvelope = {
    data: AvatarCreateManyUserInput | AvatarCreateManyUserInput[]
  }

  export type ChatMessageCreateWithoutAuthorInput = {
    content: string
    sentAt?: Date | string
    attachedImage?: ImageCreateNestedManyWithoutMessageInput
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    sentAt?: Date | string
    chatGroupId: number
    attachedImage?: ImageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatMessageCreateOrConnectWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageCreateManyAuthorInputEnvelope = {
    data: ChatMessageCreateManyAuthorInput | ChatMessageCreateManyAuthorInput[]
  }

  export type UsersOnChatsCreateWithoutUserInput = {
    chat: ChatGroupCreateNestedOneWithoutMembersInput
  }

  export type UsersOnChatsUncheckedCreateWithoutUserInput = {
    chatId: number
  }

  export type UsersOnChatsCreateOrConnectWithoutUserInput = {
    where: UsersOnChatsWhereUniqueInput
    create: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput>
  }

  export type UsersOnChatsCreateManyUserInputEnvelope = {
    data: UsersOnChatsCreateManyUserInput | UsersOnChatsCreateManyUserInput[]
  }

  export type ChatGroupCreateWithoutAdminInput = {
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    members?: UsersOnChatsCreateNestedManyWithoutChatInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutAdminInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    members?: UsersOnChatsUncheckedCreateNestedManyWithoutChatInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput>
  }

  export type ChatGroupCreateManyAdminInputEnvelope = {
    data: ChatGroupCreateManyAdminInput | ChatGroupCreateManyAdminInput[]
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
    topic?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    links?: StringNullableFilter<"Post"> | string | null
  }

  export type AlbumUpsertWithWhereUniqueWithoutUserInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutUserInput, AlbumUncheckedUpdateWithoutUserInput>
    create: XOR<AlbumCreateWithoutUserInput, AlbumUncheckedCreateWithoutUserInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutUserInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutUserInput, AlbumUncheckedUpdateWithoutUserInput>
  }

  export type AlbumUpdateManyWithWhereWithoutUserInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutUserInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    name?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    previewImage?: StringNullableFilter<"Album"> | string | null
    userId?: IntFilter<"Album"> | number
    shown?: BoolFilter<"Album"> | boolean
    topic?: StringFilter<"Album"> | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutProfile1Input, FriendshipUncheckedUpdateWithoutProfile1Input>
    create: XOR<FriendshipCreateWithoutProfile1Input, FriendshipUncheckedCreateWithoutProfile1Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutProfile1Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutProfile1Input, FriendshipUncheckedUpdateWithoutProfile1Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutProfile1Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutProfile1Input>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: IntFilter<"Friendship"> | number
    accepted?: BoolFilter<"Friendship"> | boolean
    profile1Id?: IntFilter<"Friendship"> | number
    profile2Id?: IntFilter<"Friendship"> | number
  }

  export type FriendshipUpsertWithWhereUniqueWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutProfile2Input, FriendshipUncheckedUpdateWithoutProfile2Input>
    create: XOR<FriendshipCreateWithoutProfile2Input, FriendshipUncheckedCreateWithoutProfile2Input>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutProfile2Input = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutProfile2Input, FriendshipUncheckedUpdateWithoutProfile2Input>
  }

  export type FriendshipUpdateManyWithWhereWithoutProfile2Input = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutProfile2Input>
  }

  export type AvatarUpsertWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUpdateManyWithWhereWithoutUserInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutUserInput>
  }

  export type AvatarScalarWhereInput = {
    AND?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    OR?: AvatarScalarWhereInput[]
    NOT?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    image?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
    active?: BoolFilter<"Avatar"> | boolean
    shown?: BoolFilter<"Avatar"> | boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UsersOnChatsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersOnChatsWhereUniqueInput
    update: XOR<UsersOnChatsUpdateWithoutUserInput, UsersOnChatsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersOnChatsCreateWithoutUserInput, UsersOnChatsUncheckedCreateWithoutUserInput>
  }

  export type UsersOnChatsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersOnChatsWhereUniqueInput
    data: XOR<UsersOnChatsUpdateWithoutUserInput, UsersOnChatsUncheckedUpdateWithoutUserInput>
  }

  export type UsersOnChatsUpdateManyWithWhereWithoutUserInput = {
    where: UsersOnChatsScalarWhereInput
    data: XOR<UsersOnChatsUpdateManyMutationInput, UsersOnChatsUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutAdminInput, ChatGroupUncheckedUpdateWithoutAdminInput>
    create: XOR<ChatGroupCreateWithoutAdminInput, ChatGroupUncheckedCreateWithoutAdminInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutAdminInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutAdminInput, ChatGroupUncheckedUpdateWithoutAdminInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutAdminInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutAdminInput>
  }

  export type ChatGroupScalarWhereInput = {
    AND?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    OR?: ChatGroupScalarWhereInput[]
    NOT?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    id?: IntFilter<"ChatGroup"> | number
    name?: StringNullableFilter<"ChatGroup"> | string | null
    isPersonalChat?: BoolFilter<"ChatGroup"> | boolean
    avatar?: StringNullableFilter<"ChatGroup"> | string | null
    adminId?: IntFilter<"ChatGroup"> | number
  }

  export type UserCreateWithoutChatGroupsInput = {
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostCreateNestedManyWithoutUserInput
    albums?: AlbumCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipCreateNestedManyWithoutProfile2Input
    avatars?: AvatarCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutAuthorInput
    administeredGroups?: ChatGroupCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    username?: string | null
    email: string
    firstname?: string | null
    lastname?: string | null
    password: string
    image?: string | null
    birthdate?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    albums?: AlbumUncheckedCreateNestedManyWithoutUserInput
    sentRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile1Input
    receivedRequests?: FriendshipUncheckedCreateNestedManyWithoutProfile2Input
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    administeredGroups?: ChatGroupUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutChatGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupCreateWithoutMembersInput = {
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    admin: UserCreateNestedOneWithoutAdministeredGroupsInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutMembersInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
    adminId: number
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutMembersInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutChatGroupsInput = {
    update: XOR<UserUpdateWithoutChatGroupsInput, UserUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatGroupsInput, UserUncheckedUpdateWithoutChatGroupsInput>
  }

  export type UserUpdateWithoutChatGroupsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutUserNestedInput
    albums?: AlbumUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    administeredGroups?: ChatGroupUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutUserNestedInput
    sentRequests?: FriendshipUncheckedUpdateManyWithoutProfile1NestedInput
    receivedRequests?: FriendshipUncheckedUpdateManyWithoutProfile2NestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    administeredGroups?: ChatGroupUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ChatGroupUpsertWithoutMembersInput = {
    update: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
  }

  export type ChatGroupUpdateWithoutMembersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: UserUpdateOneRequiredWithoutAdministeredGroupsNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ImageCreateManyAlbumInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    messageId?: number | null
  }

  export type ImageUpdateWithoutAlbumInput = {
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutImagesNestedInput
    message?: ChatMessageUpdateOneWithoutAttachedImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersOnChatsCreateManyChatInput = {
    userId: number
  }

  export type ChatMessageCreateManyChatGroupInput = {
    id?: number
    content: string
    sentAt?: Date | string
    authorId: number
  }

  export type UsersOnChatsUpdateWithoutChatInput = {
    user?: UserUpdateOneRequiredWithoutChatGroupsNestedInput
  }

  export type UsersOnChatsUncheckedUpdateWithoutChatInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersOnChatsUncheckedUpdateManyWithoutChatInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageUpdateWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: ImageUpdateManyWithoutMessageNestedInput
    author?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    attachedImage?: ImageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateManyMessageInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    postId?: number | null
    albumId?: number | null
  }

  export type ImageUpdateWithoutMessageInput = {
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutImagesNestedInput
    album?: AlbumUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageCreateManyPostInput = {
    id?: number
    filename: string
    file?: string
    uploadedAt?: Date | string
    albumId?: number | null
    messageId?: number | null
  }

  export type ImageUpdateWithoutPostInput = {
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneWithoutImagesNestedInput
    message?: ChatMessageUpdateOneWithoutAttachedImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    messageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    topic?: string | null
    tags?: string | null
    content: string
    views?: number
    likes?: number
    links?: string | null
  }

  export type AlbumCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    previewImage?: string | null
    shown?: boolean
    topic: string
  }

  export type FriendshipCreateManyProfile1Input = {
    id?: number
    accepted?: boolean
    profile2Id: number
  }

  export type FriendshipCreateManyProfile2Input = {
    id?: number
    accepted?: boolean
    profile1Id: number
  }

  export type AvatarCreateManyUserInput = {
    id?: number
    image: string
    active?: boolean
    shown?: boolean
  }

  export type ChatMessageCreateManyAuthorInput = {
    id?: number
    content: string
    sentAt?: Date | string
    chatGroupId: number
  }

  export type UsersOnChatsCreateManyUserInput = {
    chatId: number
  }

  export type ChatGroupCreateManyAdminInput = {
    id?: number
    name?: string | null
    isPersonalChat?: boolean
    avatar?: string | null
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    links?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
    images?: ImageUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewImage?: NullableStringFieldUpdateOperationsInput | string | null
    shown?: BoolFieldUpdateOperationsInput | boolean
    topic?: StringFieldUpdateOperationsInput | string
  }

  export type FriendshipUpdateWithoutProfile1Input = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile2?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutProfile1Input = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile2Id?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile1Input = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile2Id?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipUpdateWithoutProfile2Input = {
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutProfile2Input = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1Id?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipUncheckedUpdateManyWithoutProfile2Input = {
    id?: IntFieldUpdateOperationsInput | number
    accepted?: BoolFieldUpdateOperationsInput | boolean
    profile1Id?: IntFieldUpdateOperationsInput | number
  }

  export type AvatarUpdateWithoutUserInput = {
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    shown?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachedImage?: ImageUpdateManyWithoutMessageNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
    attachedImage?: ImageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroupId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersOnChatsUpdateWithoutUserInput = {
    chat?: ChatGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UsersOnChatsUncheckedUpdateWithoutUserInput = {
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersOnChatsUncheckedUpdateManyWithoutUserInput = {
    chatId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatGroupUpdateWithoutAdminInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UsersOnChatsUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UsersOnChatsUncheckedUpdateManyWithoutChatNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isPersonalChat?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
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