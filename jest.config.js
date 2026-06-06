{
  "testEnvironment": "jest-environment-jsdom",
  "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  "setupFilesAfterEnv": [],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/$1"
  },
  "collectCoverageFrom": [
    "app/**/*.{js,jsx,ts,tsx}",
    "!app/**/*.d.ts",
    "!app/**/layout.tsx",
    "!app/**/page.tsx"
  ]
}
