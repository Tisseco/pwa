// Import the original type declarations from i18next
import "i18next";

// Import all namespaces from the default language for type definitions
// This ensures TypeScript knows the structure of your translation resources
import { resources } from "../initTranslation";

// Extend the i18next module declaration to add custom type definitions
declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // Specify the default namespace used by your application
    // This is "common" because most translations will likely reside in this namespace
    defaultNS: "common";
    // Define the structure of translation resources
    // Use the 'resources' from the default language (English in this case)
    // to provide accurate type definitions for all available keys and namespaces
    resources: typeof resources['en'];
  }
}
