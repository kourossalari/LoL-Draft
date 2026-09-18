// Configuration ESLint. Les blocs s'appliquent dans l'ordre :
// chaque bloc peut compléter ou écraser les règles du précédent.
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // Fichiers qu'ESLint ne doit jamais lire.
  { ignores: ["dist/", "build/", "node_modules/"] },

  // Règles de base pour tout JavaScript.
  js.configs.recommended,

  // Règles supplémentaires propres à TypeScript.
  tseslint.configs.recommended,

  // Toujours en dernier : désactive les règles ESLint de pure mise en forme,
  // pour qu'elles n'entrent pas en conflit avec Prettier.
  prettier,
);
