import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME =
  process.env.NODE_ENV === 'development'
    ? '../config.dev.yml'
    : '../config.prod.yml';

console.log(YAML_CONFIG_FILENAME);

export default () => {
  return yaml.load(readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'));
};
