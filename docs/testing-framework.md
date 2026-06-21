# GameScript Engine Test Suite Blueprint

## Unit Testing Logic Matches
Every compilation track must be validated against deterministic state results.

| Target Element | Test Criterion | Expected Output |
| :--- | :--- | :--- |
| `<if>Number less...` | Injected value < secret key | Trigger lower text loop |
| `<if>Number more...` | Injected value > secret key | Trigger higher text loop |
| `<if>Number right...`| Injected value == secret key | Spawn "Play Again" node |

## Visual Regression Parameters
Verify canvas elements adjust properly under varying responsive viewpoints while preserving Astro design elements.
