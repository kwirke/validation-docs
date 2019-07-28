export const apiData = {
    sections: [
        {
            name: 'Constructors',
            methods: [
                'new Valid',
                'valid',
                'new Invalid',
                'invalid',
                'of',
                'fromEither',
                'fromPredicateOr',
            ],
        },
        {
            name: 'Array Helpers',
            methods: ['empty', 'concat', 'sequence'],
        },
        {
            name: 'Object Helpers',
            methods: ['property', 'allProperties', 'validateProperties'],
        },
        {
            name: 'General Methods',
            methods: [
                'isValid',
                'isInvalid',
                'value',
                'errorsOr',
                'concatErr',
                'map',
                'mapErrors',
                'mapError',
                'ap',
                'chain',
                'fold',
            ],
        },
        {
            name: 'Either Adapters',
            methods: [
                'validateEither',
                'validateEitherList',
                'validate',
                'validateAll',
            ],
        },
    ],
    methods: {
        'new Valid': {
            name: 'new Valid',
            type: 'new Valid(value: T): Valid<T>',
            description: [
                'Returns a Valid type.',
                {
                    code: `import { Valid } from '@rexform/validation';

const v = new Valid(42);`,
                },
            ],
        },
        valid: {
            name: 'valid',
            type: 'valid<T>(value: T): Valid<T>',
            description: [
                'Returns a Valid type.',
                {
                    code: `import { valid } from '@rexform/validation';

const v = valid(42);`,
                },
            ],
        },
        'new Invalid': {
            name: 'new Invalid',
            type: 'new Invalid(value: T, errors: E[]): Invalid<E, T>',
            description: [
                'Returns an Invalid type. Throws if errors is an empty array.',
                {
                    code: `import { Invalid } from '@rexform/validation';

const i = new Invalid('', ['Empty value']);`,
                },
            ],
        },
        invalid: {
            name: 'invalid',
            type: 'invalid(value: T, errors: E | E[]): Invalid<E, T>',
            description: [
                'Returns an Invalid type. Throws if errors is an empty array. It is curried, and casts the error to an array if it is not.',
                {
                    code: `import { invalid } from '@rexform/validation';

const i = invalid('', ['Empty value']);
const i = invalid('')('Empty value');`,
                },
            ],
        },
        of: {
            name: 'of',
            type: 'of(value: T, errors?: E[]): Validation<E, T>',
            description: [
                'If errors is empty or a nil value, returns a Valid type, otherwise returns an Invalid type with the errors.',
                {
                    code: `import { of } from '@rexform/validation';

const valid = of(42, []);
const invalid = of('', ['Empty value']);`,
                },
            ],
        },
        fromEither: {
            name: 'fromEither',
            type:
                'fromEither(initialValue: T, either: Either<E | E[], T>): Validation<E, T>',
            description: [
                'If either is a Right, it returns a Valid type ignoring `initialValue`. Otherwise, returns an Invalid type with the `initialValue` and the errors wrapped in the Left type. It is curried and casts Left contents to an array.',
                {
                    code: `import { fromEither } from '@rexform/validation';

const valid = fromEither(3, Either.Right(10));
const invalid = fromEither(3, Either.Left('error'));`,
                },
            ],
        },
        fromPredicateOr: {
            name: 'fromPredicateOr',
            type:
                'fromPredicateOr(errorFn: (v: V) => E, predicate: (v: V) => boolean): (v: V) => Validation<E, V>',
            description: [
                'Transforms a boolean predicate into a function that receives a value and returns a Validation. Curried.',
                {
                    code: `import { fromPredicateOr } from '@rexform/validation';

const isEven = (x: number) => x % 2 === 0;
const validateEven = fromPredicateOr(v => \`\${v} is not even.\`, isEven);

validateEven(2); // => Valid(2)
validateEven(3); // => Invalid(3, ['3 is not even'])`,
                },
            ],
        },
    },
};
