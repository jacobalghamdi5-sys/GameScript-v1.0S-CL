# GameScript v1.0 Start: Troubleshooting Guide

## Common Compiler Interface Errors

### Error: `Syntax Interruption at '___' `
- **Cause**: You missed a structural divider, or added four underscores (`____`) instead of three (`___`).
- **Fix**: Verify your code segment has exactly three underscores dividing your logical states.

### Error: `Font Payload Failed to Mount`
- **Cause**: Device offline or your system blocked the Google Sans asset link.
- **Fix**: Ensure your landing platform stylesheet properly uses the imported font family fallbacks.
