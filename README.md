# LeetCode Practice

A practice repository for data structures, algorithms, and interview-style problem solving across TypeScript, JavaScript, and Python.

The goal of this repo is repetition and fluency: solving common coding patterns, comparing approaches across languages, and keeping a lightweight record of algorithm practice.

## What is included

- **NeetCode-style problems** in Python, JavaScript, and TypeScript
- **AlgoMap practice problems** organized by language and difficulty
- **Advent of Code experiments** for puzzle-style problem solving
- Older solution attempts kept for comparison and iteration

## Repository structure

```text
.
├── algomap/
│   ├── javascript/      # TypeScript solutions for AlgoMap problems
│   └── python/          # Python solutions for AlgoMap problems
├── adventOfCode/        # Advent of Code puzzle experiments and input files
├── misc/                # Small standalone practice snippets
└── neetcode/
    ├── javascript/      # JavaScript / TypeScript solutions
    ├── python/          # Python solutions
    └── old/             # Earlier solution attempts and reference versions
```

## Topics covered

- Arrays and hash maps
- Two-pointer patterns
- String manipulation
- Duplicate detection
- Anagrams and grouping
- Ranking and top-k style problems
- Encoding / decoding exercises
- Basic control-flow practice

## Running solutions

Most files are standalone scripts and can be run directly.

### Python

```bash
python3 neetcode/python/twoSum.py
python3 algomap/python/easy_2239_find_closest_number_to_zero.py
```

### JavaScript

```bash
node neetcode/old/001twoSum_complement.js
node adventOfCode/day3.js
```

### TypeScript

Some TypeScript solutions live under `neetcode/javascript/` with a local `tsconfig.json`. Run them with your preferred TypeScript runner, for example:

```bash
npx tsx neetcode/javascript/twoSum.ts
```

Or compile with `tsc` if TypeScript is installed globally.

## Notes

This is an active practice repo, not a packaged application. Solutions prioritize clarity, pattern recognition, and iteration over framework setup or production structure.

## License

No license has been specified for this repository yet.
