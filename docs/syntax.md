# GameScript v1.0 Start Syntax Specification

This document details the core rules of the `v1.0 Start` grammar parser.

## Core Rules

1. **Segment Divider (`___`)**
   The triple underscore acts as a compilation barrier. It slices execution logic into stages: Environment -> Layout -> Dynamic Logic Tree -> Styling rules.

2. **Conditional Interceptors (`<if>`)**
   Conditionals track specific runtime keywords like `Number less...`, `Number more...`, and `Number right...`. 

3. **Asset Injection (`Embed:::`)**
   Dynamically injects visual blocks (like buttons) into active runtime logic paths upon matching execution conditions.
