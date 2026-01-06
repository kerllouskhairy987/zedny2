
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PowerFeatures
 * 
 */
export type PowerFeatures = $Result.DefaultSelection<Prisma.$PowerFeaturesPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Complaints
 * 
 */
export type Complaints = $Result.DefaultSelection<Prisma.$ComplaintsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PowerFeatures
 * const powerFeatures = await prisma.powerFeatures.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PowerFeatures
   * const powerFeatures = await prisma.powerFeatures.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.powerFeatures`: Exposes CRUD operations for the **PowerFeatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PowerFeatures
    * const powerFeatures = await prisma.powerFeatures.findMany()
    * ```
    */
  get powerFeatures(): Prisma.PowerFeaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.complaints`: Exposes CRUD operations for the **Complaints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaints.findMany()
    * ```
    */
  get complaints(): Prisma.ComplaintsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PowerFeatures: 'PowerFeatures',
    Team: 'Team',
    User: 'User',
    Complaints: 'Complaints'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "powerFeatures" | "team" | "user" | "complaints"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PowerFeatures: {
        payload: Prisma.$PowerFeaturesPayload<ExtArgs>
        fields: Prisma.PowerFeaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PowerFeaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PowerFeaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          findFirst: {
            args: Prisma.PowerFeaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PowerFeaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          findMany: {
            args: Prisma.PowerFeaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>[]
          }
          create: {
            args: Prisma.PowerFeaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          createMany: {
            args: Prisma.PowerFeaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PowerFeaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>[]
          }
          delete: {
            args: Prisma.PowerFeaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          update: {
            args: Prisma.PowerFeaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          deleteMany: {
            args: Prisma.PowerFeaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PowerFeaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PowerFeaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>[]
          }
          upsert: {
            args: Prisma.PowerFeaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerFeaturesPayload>
          }
          aggregate: {
            args: Prisma.PowerFeaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePowerFeatures>
          }
          groupBy: {
            args: Prisma.PowerFeaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PowerFeaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PowerFeaturesCountArgs<ExtArgs>
            result: $Utils.Optional<PowerFeaturesCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
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
      Complaints: {
        payload: Prisma.$ComplaintsPayload<ExtArgs>
        fields: Prisma.ComplaintsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          findFirst: {
            args: Prisma.ComplaintsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          findMany: {
            args: Prisma.ComplaintsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>[]
          }
          create: {
            args: Prisma.ComplaintsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          createMany: {
            args: Prisma.ComplaintsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplaintsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>[]
          }
          delete: {
            args: Prisma.ComplaintsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          update: {
            args: Prisma.ComplaintsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplaintsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>[]
          }
          upsert: {
            args: Prisma.ComplaintsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintsPayload>
          }
          aggregate: {
            args: Prisma.ComplaintsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaints>
          }
          groupBy: {
            args: Prisma.ComplaintsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintsCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    powerFeatures?: PowerFeaturesOmit
    team?: TeamOmit
    user?: UserOmit
    complaints?: ComplaintsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model PowerFeatures
   */

  export type AggregatePowerFeatures = {
    _count: PowerFeaturesCountAggregateOutputType | null
    _avg: PowerFeaturesAvgAggregateOutputType | null
    _sum: PowerFeaturesSumAggregateOutputType | null
    _min: PowerFeaturesMinAggregateOutputType | null
    _max: PowerFeaturesMaxAggregateOutputType | null
  }

  export type PowerFeaturesAvgAggregateOutputType = {
    id: number | null
  }

  export type PowerFeaturesSumAggregateOutputType = {
    id: number | null
  }

  export type PowerFeaturesMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PowerFeaturesMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PowerFeaturesCountAggregateOutputType = {
    id: number
    imageUrl: number
    title: number
    desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PowerFeaturesAvgAggregateInputType = {
    id?: true
  }

  export type PowerFeaturesSumAggregateInputType = {
    id?: true
  }

  export type PowerFeaturesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PowerFeaturesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PowerFeaturesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PowerFeaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerFeatures to aggregate.
     */
    where?: PowerFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerFeatures to fetch.
     */
    orderBy?: PowerFeaturesOrderByWithRelationInput | PowerFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PowerFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PowerFeatures
    **/
    _count?: true | PowerFeaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PowerFeaturesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PowerFeaturesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PowerFeaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PowerFeaturesMaxAggregateInputType
  }

  export type GetPowerFeaturesAggregateType<T extends PowerFeaturesAggregateArgs> = {
        [P in keyof T & keyof AggregatePowerFeatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePowerFeatures[P]>
      : GetScalarType<T[P], AggregatePowerFeatures[P]>
  }




  export type PowerFeaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerFeaturesWhereInput
    orderBy?: PowerFeaturesOrderByWithAggregationInput | PowerFeaturesOrderByWithAggregationInput[]
    by: PowerFeaturesScalarFieldEnum[] | PowerFeaturesScalarFieldEnum
    having?: PowerFeaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PowerFeaturesCountAggregateInputType | true
    _avg?: PowerFeaturesAvgAggregateInputType
    _sum?: PowerFeaturesSumAggregateInputType
    _min?: PowerFeaturesMinAggregateInputType
    _max?: PowerFeaturesMaxAggregateInputType
  }

  export type PowerFeaturesGroupByOutputType = {
    id: number
    imageUrl: string
    title: string
    desc: string
    createdAt: Date
    updatedAt: Date
    _count: PowerFeaturesCountAggregateOutputType | null
    _avg: PowerFeaturesAvgAggregateOutputType | null
    _sum: PowerFeaturesSumAggregateOutputType | null
    _min: PowerFeaturesMinAggregateOutputType | null
    _max: PowerFeaturesMaxAggregateOutputType | null
  }

  type GetPowerFeaturesGroupByPayload<T extends PowerFeaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PowerFeaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PowerFeaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PowerFeaturesGroupByOutputType[P]>
            : GetScalarType<T[P], PowerFeaturesGroupByOutputType[P]>
        }
      >
    >


  export type PowerFeaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["powerFeatures"]>

  export type PowerFeaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["powerFeatures"]>

  export type PowerFeaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["powerFeatures"]>

  export type PowerFeaturesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PowerFeaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "title" | "desc" | "createdAt" | "updatedAt", ExtArgs["result"]["powerFeatures"]>

  export type $PowerFeaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PowerFeatures"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      title: string
      desc: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["powerFeatures"]>
    composites: {}
  }

  type PowerFeaturesGetPayload<S extends boolean | null | undefined | PowerFeaturesDefaultArgs> = $Result.GetResult<Prisma.$PowerFeaturesPayload, S>

  type PowerFeaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PowerFeaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PowerFeaturesCountAggregateInputType | true
    }

  export interface PowerFeaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PowerFeatures'], meta: { name: 'PowerFeatures' } }
    /**
     * Find zero or one PowerFeatures that matches the filter.
     * @param {PowerFeaturesFindUniqueArgs} args - Arguments to find a PowerFeatures
     * @example
     * // Get one PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PowerFeaturesFindUniqueArgs>(args: SelectSubset<T, PowerFeaturesFindUniqueArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PowerFeatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PowerFeaturesFindUniqueOrThrowArgs} args - Arguments to find a PowerFeatures
     * @example
     * // Get one PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PowerFeaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, PowerFeaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesFindFirstArgs} args - Arguments to find a PowerFeatures
     * @example
     * // Get one PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PowerFeaturesFindFirstArgs>(args?: SelectSubset<T, PowerFeaturesFindFirstArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerFeatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesFindFirstOrThrowArgs} args - Arguments to find a PowerFeatures
     * @example
     * // Get one PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PowerFeaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, PowerFeaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PowerFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findMany()
     * 
     * // Get first 10 PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const powerFeaturesWithIdOnly = await prisma.powerFeatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PowerFeaturesFindManyArgs>(args?: SelectSubset<T, PowerFeaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PowerFeatures.
     * @param {PowerFeaturesCreateArgs} args - Arguments to create a PowerFeatures.
     * @example
     * // Create one PowerFeatures
     * const PowerFeatures = await prisma.powerFeatures.create({
     *   data: {
     *     // ... data to create a PowerFeatures
     *   }
     * })
     * 
     */
    create<T extends PowerFeaturesCreateArgs>(args: SelectSubset<T, PowerFeaturesCreateArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PowerFeatures.
     * @param {PowerFeaturesCreateManyArgs} args - Arguments to create many PowerFeatures.
     * @example
     * // Create many PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PowerFeaturesCreateManyArgs>(args?: SelectSubset<T, PowerFeaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PowerFeatures and returns the data saved in the database.
     * @param {PowerFeaturesCreateManyAndReturnArgs} args - Arguments to create many PowerFeatures.
     * @example
     * // Create many PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PowerFeatures and only return the `id`
     * const powerFeaturesWithIdOnly = await prisma.powerFeatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PowerFeaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, PowerFeaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PowerFeatures.
     * @param {PowerFeaturesDeleteArgs} args - Arguments to delete one PowerFeatures.
     * @example
     * // Delete one PowerFeatures
     * const PowerFeatures = await prisma.powerFeatures.delete({
     *   where: {
     *     // ... filter to delete one PowerFeatures
     *   }
     * })
     * 
     */
    delete<T extends PowerFeaturesDeleteArgs>(args: SelectSubset<T, PowerFeaturesDeleteArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PowerFeatures.
     * @param {PowerFeaturesUpdateArgs} args - Arguments to update one PowerFeatures.
     * @example
     * // Update one PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PowerFeaturesUpdateArgs>(args: SelectSubset<T, PowerFeaturesUpdateArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PowerFeatures.
     * @param {PowerFeaturesDeleteManyArgs} args - Arguments to filter PowerFeatures to delete.
     * @example
     * // Delete a few PowerFeatures
     * const { count } = await prisma.powerFeatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PowerFeaturesDeleteManyArgs>(args?: SelectSubset<T, PowerFeaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PowerFeaturesUpdateManyArgs>(args: SelectSubset<T, PowerFeaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerFeatures and returns the data updated in the database.
     * @param {PowerFeaturesUpdateManyAndReturnArgs} args - Arguments to update many PowerFeatures.
     * @example
     * // Update many PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PowerFeatures and only return the `id`
     * const powerFeaturesWithIdOnly = await prisma.powerFeatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends PowerFeaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, PowerFeaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PowerFeatures.
     * @param {PowerFeaturesUpsertArgs} args - Arguments to update or create a PowerFeatures.
     * @example
     * // Update or create a PowerFeatures
     * const powerFeatures = await prisma.powerFeatures.upsert({
     *   create: {
     *     // ... data to create a PowerFeatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PowerFeatures we want to update
     *   }
     * })
     */
    upsert<T extends PowerFeaturesUpsertArgs>(args: SelectSubset<T, PowerFeaturesUpsertArgs<ExtArgs>>): Prisma__PowerFeaturesClient<$Result.GetResult<Prisma.$PowerFeaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PowerFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesCountArgs} args - Arguments to filter PowerFeatures to count.
     * @example
     * // Count the number of PowerFeatures
     * const count = await prisma.powerFeatures.count({
     *   where: {
     *     // ... the filter for the PowerFeatures we want to count
     *   }
     * })
    **/
    count<T extends PowerFeaturesCountArgs>(
      args?: Subset<T, PowerFeaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PowerFeaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PowerFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PowerFeaturesAggregateArgs>(args: Subset<T, PowerFeaturesAggregateArgs>): Prisma.PrismaPromise<GetPowerFeaturesAggregateType<T>>

    /**
     * Group by PowerFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFeaturesGroupByArgs} args - Group by arguments.
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
      T extends PowerFeaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PowerFeaturesGroupByArgs['orderBy'] }
        : { orderBy?: PowerFeaturesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PowerFeaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPowerFeaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PowerFeatures model
   */
  readonly fields: PowerFeaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PowerFeatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PowerFeaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PowerFeatures model
   */
  interface PowerFeaturesFieldRefs {
    readonly id: FieldRef<"PowerFeatures", 'Int'>
    readonly imageUrl: FieldRef<"PowerFeatures", 'String'>
    readonly title: FieldRef<"PowerFeatures", 'String'>
    readonly desc: FieldRef<"PowerFeatures", 'String'>
    readonly createdAt: FieldRef<"PowerFeatures", 'DateTime'>
    readonly updatedAt: FieldRef<"PowerFeatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PowerFeatures findUnique
   */
  export type PowerFeaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter, which PowerFeatures to fetch.
     */
    where: PowerFeaturesWhereUniqueInput
  }

  /**
   * PowerFeatures findUniqueOrThrow
   */
  export type PowerFeaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter, which PowerFeatures to fetch.
     */
    where: PowerFeaturesWhereUniqueInput
  }

  /**
   * PowerFeatures findFirst
   */
  export type PowerFeaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter, which PowerFeatures to fetch.
     */
    where?: PowerFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerFeatures to fetch.
     */
    orderBy?: PowerFeaturesOrderByWithRelationInput | PowerFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerFeatures.
     */
    cursor?: PowerFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerFeatures.
     */
    distinct?: PowerFeaturesScalarFieldEnum | PowerFeaturesScalarFieldEnum[]
  }

  /**
   * PowerFeatures findFirstOrThrow
   */
  export type PowerFeaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter, which PowerFeatures to fetch.
     */
    where?: PowerFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerFeatures to fetch.
     */
    orderBy?: PowerFeaturesOrderByWithRelationInput | PowerFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerFeatures.
     */
    cursor?: PowerFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerFeatures.
     */
    distinct?: PowerFeaturesScalarFieldEnum | PowerFeaturesScalarFieldEnum[]
  }

  /**
   * PowerFeatures findMany
   */
  export type PowerFeaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter, which PowerFeatures to fetch.
     */
    where?: PowerFeaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerFeatures to fetch.
     */
    orderBy?: PowerFeaturesOrderByWithRelationInput | PowerFeaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PowerFeatures.
     */
    cursor?: PowerFeaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerFeatures.
     */
    skip?: number
    distinct?: PowerFeaturesScalarFieldEnum | PowerFeaturesScalarFieldEnum[]
  }

  /**
   * PowerFeatures create
   */
  export type PowerFeaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * The data needed to create a PowerFeatures.
     */
    data: XOR<PowerFeaturesCreateInput, PowerFeaturesUncheckedCreateInput>
  }

  /**
   * PowerFeatures createMany
   */
  export type PowerFeaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PowerFeatures.
     */
    data: PowerFeaturesCreateManyInput | PowerFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PowerFeatures createManyAndReturn
   */
  export type PowerFeaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * The data used to create many PowerFeatures.
     */
    data: PowerFeaturesCreateManyInput | PowerFeaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PowerFeatures update
   */
  export type PowerFeaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * The data needed to update a PowerFeatures.
     */
    data: XOR<PowerFeaturesUpdateInput, PowerFeaturesUncheckedUpdateInput>
    /**
     * Choose, which PowerFeatures to update.
     */
    where: PowerFeaturesWhereUniqueInput
  }

  /**
   * PowerFeatures updateMany
   */
  export type PowerFeaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PowerFeatures.
     */
    data: XOR<PowerFeaturesUpdateManyMutationInput, PowerFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which PowerFeatures to update
     */
    where?: PowerFeaturesWhereInput
    /**
     * Limit how many PowerFeatures to update.
     */
    limit?: number
  }

  /**
   * PowerFeatures updateManyAndReturn
   */
  export type PowerFeaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * The data used to update PowerFeatures.
     */
    data: XOR<PowerFeaturesUpdateManyMutationInput, PowerFeaturesUncheckedUpdateManyInput>
    /**
     * Filter which PowerFeatures to update
     */
    where?: PowerFeaturesWhereInput
    /**
     * Limit how many PowerFeatures to update.
     */
    limit?: number
  }

  /**
   * PowerFeatures upsert
   */
  export type PowerFeaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * The filter to search for the PowerFeatures to update in case it exists.
     */
    where: PowerFeaturesWhereUniqueInput
    /**
     * In case the PowerFeatures found by the `where` argument doesn't exist, create a new PowerFeatures with this data.
     */
    create: XOR<PowerFeaturesCreateInput, PowerFeaturesUncheckedCreateInput>
    /**
     * In case the PowerFeatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PowerFeaturesUpdateInput, PowerFeaturesUncheckedUpdateInput>
  }

  /**
   * PowerFeatures delete
   */
  export type PowerFeaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
    /**
     * Filter which PowerFeatures to delete.
     */
    where: PowerFeaturesWhereUniqueInput
  }

  /**
   * PowerFeatures deleteMany
   */
  export type PowerFeaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerFeatures to delete
     */
    where?: PowerFeaturesWhereInput
    /**
     * Limit how many PowerFeatures to delete.
     */
    limit?: number
  }

  /**
   * PowerFeatures without action
   */
  export type PowerFeaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerFeatures
     */
    select?: PowerFeaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerFeatures
     */
    omit?: PowerFeaturesOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    src: string | null
    name: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    src: string | null
    name: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    src: number
    name: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    src?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    src?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    src?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    src: string
    name: string
    position: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    src?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    src?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "src" | "name" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      src: string
      name: string
      position: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly src: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly position: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
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
    password: string | null
    isAdmin: boolean | null
    pan: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    pan: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isAdmin: number
    pan: number
    createdAt: number
    updatedAt: number
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
    password?: true
    isAdmin?: true
    pan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    pan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isAdmin?: true
    pan?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string
    password: string
    isAdmin: boolean
    pan: boolean
    createdAt: Date
    updatedAt: Date
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
    password?: boolean
    isAdmin?: boolean
    pan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    pan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    pan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    pan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isAdmin" | "pan" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isAdmin: boolean
      pan: boolean
      createdAt: Date
      updatedAt: Date
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
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly pan: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }


  /**
   * Model Complaints
   */

  export type AggregateComplaints = {
    _count: ComplaintsCountAggregateOutputType | null
    _avg: ComplaintsAvgAggregateOutputType | null
    _sum: ComplaintsSumAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  export type ComplaintsAvgAggregateOutputType = {
    id: number | null
  }

  export type ComplaintsSumAggregateOutputType = {
    id: number | null
  }

  export type ComplaintsMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplaintsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplaintsCountAggregateOutputType = {
    id: number
    username: number
    email: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplaintsAvgAggregateInputType = {
    id?: true
  }

  export type ComplaintsSumAggregateInputType = {
    id?: true
  }

  export type ComplaintsMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplaintsMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplaintsCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplaintsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to aggregate.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complaints
    **/
    _count?: true | ComplaintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintsMaxAggregateInputType
  }

  export type GetComplaintsAggregateType<T extends ComplaintsAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaints[P]>
      : GetScalarType<T[P], AggregateComplaints[P]>
  }




  export type ComplaintsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintsWhereInput
    orderBy?: ComplaintsOrderByWithAggregationInput | ComplaintsOrderByWithAggregationInput[]
    by: ComplaintsScalarFieldEnum[] | ComplaintsScalarFieldEnum
    having?: ComplaintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintsCountAggregateInputType | true
    _avg?: ComplaintsAvgAggregateInputType
    _sum?: ComplaintsSumAggregateInputType
    _min?: ComplaintsMinAggregateInputType
    _max?: ComplaintsMaxAggregateInputType
  }

  export type ComplaintsGroupByOutputType = {
    id: number
    username: string
    email: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ComplaintsCountAggregateOutputType | null
    _avg: ComplaintsAvgAggregateOutputType | null
    _sum: ComplaintsSumAggregateOutputType | null
    _min: ComplaintsMinAggregateOutputType | null
    _max: ComplaintsMaxAggregateOutputType | null
  }

  type GetComplaintsGroupByPayload<T extends ComplaintsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintsGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["complaints"]>

  export type ComplaintsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["complaints"]>

  export type ComplaintsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["complaints"]>

  export type ComplaintsSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplaintsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["complaints"]>

  export type $ComplaintsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complaints"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["complaints"]>
    composites: {}
  }

  type ComplaintsGetPayload<S extends boolean | null | undefined | ComplaintsDefaultArgs> = $Result.GetResult<Prisma.$ComplaintsPayload, S>

  type ComplaintsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintsCountAggregateInputType | true
    }

  export interface ComplaintsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complaints'], meta: { name: 'Complaints' } }
    /**
     * Find zero or one Complaints that matches the filter.
     * @param {ComplaintsFindUniqueArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintsFindUniqueArgs>(args: SelectSubset<T, ComplaintsFindUniqueArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintsFindUniqueOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintsFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindFirstArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintsFindFirstArgs>(args?: SelectSubset<T, ComplaintsFindFirstArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindFirstOrThrowArgs} args - Arguments to find a Complaints
     * @example
     * // Get one Complaints
     * const complaints = await prisma.complaints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintsFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaints.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complaintsWithIdOnly = await prisma.complaints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplaintsFindManyArgs>(args?: SelectSubset<T, ComplaintsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaints.
     * @param {ComplaintsCreateArgs} args - Arguments to create a Complaints.
     * @example
     * // Create one Complaints
     * const Complaints = await prisma.complaints.create({
     *   data: {
     *     // ... data to create a Complaints
     *   }
     * })
     * 
     */
    create<T extends ComplaintsCreateArgs>(args: SelectSubset<T, ComplaintsCreateArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {ComplaintsCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaints = await prisma.complaints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintsCreateManyArgs>(args?: SelectSubset<T, ComplaintsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaints and returns the data saved in the database.
     * @param {ComplaintsCreateManyAndReturnArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaints = await prisma.complaints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaints and only return the `id`
     * const complaintsWithIdOnly = await prisma.complaints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplaintsCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplaintsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaints.
     * @param {ComplaintsDeleteArgs} args - Arguments to delete one Complaints.
     * @example
     * // Delete one Complaints
     * const Complaints = await prisma.complaints.delete({
     *   where: {
     *     // ... filter to delete one Complaints
     *   }
     * })
     * 
     */
    delete<T extends ComplaintsDeleteArgs>(args: SelectSubset<T, ComplaintsDeleteArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaints.
     * @param {ComplaintsUpdateArgs} args - Arguments to update one Complaints.
     * @example
     * // Update one Complaints
     * const complaints = await prisma.complaints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintsUpdateArgs>(args: SelectSubset<T, ComplaintsUpdateArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {ComplaintsDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintsDeleteManyArgs>(args?: SelectSubset<T, ComplaintsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaints = await prisma.complaints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintsUpdateManyArgs>(args: SelectSubset<T, ComplaintsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints and returns the data updated in the database.
     * @param {ComplaintsUpdateManyAndReturnArgs} args - Arguments to update many Complaints.
     * @example
     * // Update many Complaints
     * const complaints = await prisma.complaints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaints and only return the `id`
     * const complaintsWithIdOnly = await prisma.complaints.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComplaintsUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplaintsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaints.
     * @param {ComplaintsUpsertArgs} args - Arguments to update or create a Complaints.
     * @example
     * // Update or create a Complaints
     * const complaints = await prisma.complaints.upsert({
     *   create: {
     *     // ... data to create a Complaints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaints we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintsUpsertArgs>(args: SelectSubset<T, ComplaintsUpsertArgs<ExtArgs>>): Prisma__ComplaintsClient<$Result.GetResult<Prisma.$ComplaintsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaints.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends ComplaintsCountArgs>(
      args?: Subset<T, ComplaintsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplaintsAggregateArgs>(args: Subset<T, ComplaintsAggregateArgs>): Prisma.PrismaPromise<GetComplaintsAggregateType<T>>

    /**
     * Group by Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintsGroupByArgs} args - Group by arguments.
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
      T extends ComplaintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintsGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplaintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complaints model
   */
  readonly fields: ComplaintsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complaints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Complaints model
   */
  interface ComplaintsFieldRefs {
    readonly id: FieldRef<"Complaints", 'Int'>
    readonly username: FieldRef<"Complaints", 'String'>
    readonly email: FieldRef<"Complaints", 'String'>
    readonly message: FieldRef<"Complaints", 'String'>
    readonly createdAt: FieldRef<"Complaints", 'DateTime'>
    readonly updatedAt: FieldRef<"Complaints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Complaints findUnique
   */
  export type ComplaintsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints findUniqueOrThrow
   */
  export type ComplaintsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints findFirst
   */
  export type ComplaintsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints findFirstOrThrow
   */
  export type ComplaintsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints findMany
   */
  export type ComplaintsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintsOrderByWithRelationInput | ComplaintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complaints.
     */
    cursor?: ComplaintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    distinct?: ComplaintsScalarFieldEnum | ComplaintsScalarFieldEnum[]
  }

  /**
   * Complaints create
   */
  export type ComplaintsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * The data needed to create a Complaints.
     */
    data: XOR<ComplaintsCreateInput, ComplaintsUncheckedCreateInput>
  }

  /**
   * Complaints createMany
   */
  export type ComplaintsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintsCreateManyInput | ComplaintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complaints createManyAndReturn
   */
  export type ComplaintsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintsCreateManyInput | ComplaintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complaints update
   */
  export type ComplaintsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * The data needed to update a Complaints.
     */
    data: XOR<ComplaintsUpdateInput, ComplaintsUncheckedUpdateInput>
    /**
     * Choose, which Complaints to update.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints updateMany
   */
  export type ComplaintsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintsWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
  }

  /**
   * Complaints updateManyAndReturn
   */
  export type ComplaintsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintsUpdateManyMutationInput, ComplaintsUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintsWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
  }

  /**
   * Complaints upsert
   */
  export type ComplaintsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * The filter to search for the Complaints to update in case it exists.
     */
    where: ComplaintsWhereUniqueInput
    /**
     * In case the Complaints found by the `where` argument doesn't exist, create a new Complaints with this data.
     */
    create: XOR<ComplaintsCreateInput, ComplaintsUncheckedCreateInput>
    /**
     * In case the Complaints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintsUpdateInput, ComplaintsUncheckedUpdateInput>
  }

  /**
   * Complaints delete
   */
  export type ComplaintsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
    /**
     * Filter which Complaints to delete.
     */
    where: ComplaintsWhereUniqueInput
  }

  /**
   * Complaints deleteMany
   */
  export type ComplaintsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to delete
     */
    where?: ComplaintsWhereInput
    /**
     * Limit how many Complaints to delete.
     */
    limit?: number
  }

  /**
   * Complaints without action
   */
  export type ComplaintsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaints
     */
    select?: ComplaintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaints
     */
    omit?: ComplaintsOmit<ExtArgs> | null
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


  export const PowerFeaturesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title: 'title',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PowerFeaturesScalarFieldEnum = (typeof PowerFeaturesScalarFieldEnum)[keyof typeof PowerFeaturesScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    src: 'src',
    name: 'name',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    pan: 'pan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ComplaintsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplaintsScalarFieldEnum = (typeof ComplaintsScalarFieldEnum)[keyof typeof ComplaintsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type PowerFeaturesWhereInput = {
    AND?: PowerFeaturesWhereInput | PowerFeaturesWhereInput[]
    OR?: PowerFeaturesWhereInput[]
    NOT?: PowerFeaturesWhereInput | PowerFeaturesWhereInput[]
    id?: IntFilter<"PowerFeatures"> | number
    imageUrl?: StringFilter<"PowerFeatures"> | string
    title?: StringFilter<"PowerFeatures"> | string
    desc?: StringFilter<"PowerFeatures"> | string
    createdAt?: DateTimeFilter<"PowerFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"PowerFeatures"> | Date | string
  }

  export type PowerFeaturesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerFeaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PowerFeaturesWhereInput | PowerFeaturesWhereInput[]
    OR?: PowerFeaturesWhereInput[]
    NOT?: PowerFeaturesWhereInput | PowerFeaturesWhereInput[]
    imageUrl?: StringFilter<"PowerFeatures"> | string
    title?: StringFilter<"PowerFeatures"> | string
    desc?: StringFilter<"PowerFeatures"> | string
    createdAt?: DateTimeFilter<"PowerFeatures"> | Date | string
    updatedAt?: DateTimeFilter<"PowerFeatures"> | Date | string
  }, "id">

  export type PowerFeaturesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PowerFeaturesCountOrderByAggregateInput
    _avg?: PowerFeaturesAvgOrderByAggregateInput
    _max?: PowerFeaturesMaxOrderByAggregateInput
    _min?: PowerFeaturesMinOrderByAggregateInput
    _sum?: PowerFeaturesSumOrderByAggregateInput
  }

  export type PowerFeaturesScalarWhereWithAggregatesInput = {
    AND?: PowerFeaturesScalarWhereWithAggregatesInput | PowerFeaturesScalarWhereWithAggregatesInput[]
    OR?: PowerFeaturesScalarWhereWithAggregatesInput[]
    NOT?: PowerFeaturesScalarWhereWithAggregatesInput | PowerFeaturesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PowerFeatures"> | number
    imageUrl?: StringWithAggregatesFilter<"PowerFeatures"> | string
    title?: StringWithAggregatesFilter<"PowerFeatures"> | string
    desc?: StringWithAggregatesFilter<"PowerFeatures"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PowerFeatures"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PowerFeatures"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    src?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    position?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    src?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    src?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    position?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    src?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    src?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    position?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    pan?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    pan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    pan?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    pan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    pan?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ComplaintsWhereInput = {
    AND?: ComplaintsWhereInput | ComplaintsWhereInput[]
    OR?: ComplaintsWhereInput[]
    NOT?: ComplaintsWhereInput | ComplaintsWhereInput[]
    id?: IntFilter<"Complaints"> | number
    username?: StringFilter<"Complaints"> | string
    email?: StringFilter<"Complaints"> | string
    message?: StringFilter<"Complaints"> | string
    createdAt?: DateTimeFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeFilter<"Complaints"> | Date | string
  }

  export type ComplaintsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplaintsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComplaintsWhereInput | ComplaintsWhereInput[]
    OR?: ComplaintsWhereInput[]
    NOT?: ComplaintsWhereInput | ComplaintsWhereInput[]
    username?: StringFilter<"Complaints"> | string
    email?: StringFilter<"Complaints"> | string
    message?: StringFilter<"Complaints"> | string
    createdAt?: DateTimeFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeFilter<"Complaints"> | Date | string
  }, "id">

  export type ComplaintsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplaintsCountOrderByAggregateInput
    _avg?: ComplaintsAvgOrderByAggregateInput
    _max?: ComplaintsMaxOrderByAggregateInput
    _min?: ComplaintsMinOrderByAggregateInput
    _sum?: ComplaintsSumOrderByAggregateInput
  }

  export type ComplaintsScalarWhereWithAggregatesInput = {
    AND?: ComplaintsScalarWhereWithAggregatesInput | ComplaintsScalarWhereWithAggregatesInput[]
    OR?: ComplaintsScalarWhereWithAggregatesInput[]
    NOT?: ComplaintsScalarWhereWithAggregatesInput | ComplaintsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Complaints"> | number
    username?: StringWithAggregatesFilter<"Complaints"> | string
    email?: StringWithAggregatesFilter<"Complaints"> | string
    message?: StringWithAggregatesFilter<"Complaints"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Complaints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Complaints"> | Date | string
  }

  export type PowerFeaturesCreateInput = {
    imageUrl: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerFeaturesUncheckedCreateInput = {
    id?: number
    imageUrl: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerFeaturesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerFeaturesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerFeaturesCreateManyInput = {
    id?: number
    imageUrl: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerFeaturesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerFeaturesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    src: string
    name: string
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    src: string
    name: string
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateInput = {
    src?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManyInput = {
    id?: number
    src: string
    name: string
    position: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    src?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    src?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    isAdmin?: boolean
    pan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    pan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isAdmin?: boolean
    pan?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pan?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintsCreateInput = {
    username: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplaintsUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplaintsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintsCreateManyInput = {
    id?: number
    username: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplaintsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PowerFeaturesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerFeaturesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PowerFeaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerFeaturesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerFeaturesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    src?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    pan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    pan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    pan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ComplaintsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplaintsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComplaintsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplaintsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplaintsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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