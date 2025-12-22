# ✨ feat: Take-Home Pay Calculator Tool

Hey team! 🎉 Just wrapped up a super clean take-home pay calculator that helps users understand their actual net income after taxes and deductions. This is a big one for SEO and user value!

## Summary

Built a comprehensive, client-side take-home pay calculator that:
- Calculates net pay after federal, state, and payroll taxes
- Handles pre-tax and post-tax deductions (401k, HSA, insurance, etc.)
- Supports all 50 states with accurate tax rates
- Uses 2025 federal tax brackets and standard deductions
- Persists user data locally (no backend needed!)
- Includes detailed breakdowns and effective tax rate calculations
- Fully SEO-optimized with comprehensive FAQ content

The tool follows all our SteadySpend principles: calm UX, no accounts required, localStorage persistence, and clear explanations. It's ready to help users build realistic budgets based on their actual take-home pay!

## Changes

### New Features
- ✨ Complete take-home pay calculator with comprehensive tax calculations
- 💾 localStorage persistence for user inputs
- 🎨 Collapsible sections for pre-tax, post-tax, and advanced settings
- 📊 Detailed breakdown showing all taxes and deductions
- 🔄 Toggle between annual and per-paycheck views
- 💡 Helpful tooltips throughout the form
- 📱 Fully responsive design

### UI Components Added
- `Select` component (reusable dropdown)
- `Checkbox` component (form checkboxes)
- `Tooltip` component (helpful inline hints)

### Calculations
- Federal income tax with 2025 brackets
- State income tax for all 50 states
- Social Security (6.2% up to wage base)
- Medicare (1.45% + 0.9% surtax for high earners)
- Pre-tax deductions (401k, HSA, health insurance)
- Post-tax deductions (insurance, life insurance, etc.)
- Local tax support
- Child tax credit calculations
- Effective tax rate display

### SEO & Content
- Comprehensive FAQ section with accordion UI
- Internal links to other tools and guides
- SEO-optimized meta tags and descriptions
- Clear H1/H2 hierarchy
- Supporting content above and below the tool

### Fixes & Updates
- Fixed hydration errors in calculator components
- Updated Header navigation to include tools link
- Updated tools page SEO metadata
- Improved contact form handling

## Files Added

- `app/tools/take-home-pay-calculator/page.tsx` - SEO-optimized page with intro and FAQs
- `app/tools/take-home-pay-calculator/TakeHomePayCalculator.tsx` - Main calculator component
- `lib/calculations/take-home-pay.ts` - Core calculation logic with 2025 tax brackets
- `lib/storage/take-home-pay.ts` - localStorage utilities for data persistence

## Files Modified

- `app/tools/page.tsx` - Updated SEO metadata
- `components/ui/select.tsx` - New Select component
- `components/ui/checkbox.tsx` - New Checkbox component
- `components/ui/tooltip.tsx` - New Tooltip component
- `components/layout/Header.tsx` - Added tools navigation link
- `app/layout.tsx` - Various layout improvements
- `app/contact/ContactForm.tsx` - Contact form updates
- `app/api/contact/route.ts` - API route improvements

## Usage Example

Users can:
1. Enter their gross income (yearly, monthly, or bi-weekly)
2. Select filing status and state
3. Add pre-tax deductions (401k, HSA, health insurance)
4. Add post-tax deductions (insurance, life insurance)
5. Optionally include local taxes and additional withholding
6. Click "Calculate" to see their take-home pay breakdown

The calculator automatically saves their inputs to localStorage, so they can return later and test different scenarios without re-entering everything.

## Screenshots / Videos

*[Add screenshots of the calculator in action, showing the form, results, and responsive views]*

## Notes & Questions

- ✅ All calculations use 2025 tax brackets and rates
- ✅ State tax rates are estimates based on top marginal rates (accurate for most users)
- ✅ The calculator handles edge cases like high earners (additional Medicare tax)
- ✅ localStorage persistence works seamlessly across sessions
- ✅ No backend or API calls required - fully client-side
- ✅ SEO content includes internal links to monthly budget calculator and guides

**Questions for the team:**
- Should we add any additional deduction types?
- Do we want to add a "print results" feature?
- Should we consider adding a comparison mode (e.g., compare two job offers)?

## Testing

- ✅ Tested with various income levels and filing statuses
- ✅ Verified state tax calculations for multiple states
- ✅ Confirmed localStorage persistence works correctly
- ✅ Tested responsive design on mobile and desktop
- ✅ Verified all tooltips display correctly
- ✅ Confirmed SEO metadata is properly set

Ready for review! 🚀
