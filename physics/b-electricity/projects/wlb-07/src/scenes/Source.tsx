import React from 'react';
import {AutoScene} from '../components/auto';

export const Source: React.FC = () => <AutoScene k="source" d={{"tag": "考点一", "title": "电源", "blocks": [{"t": "rule", "tag": "电源", "at": "s1", "text": "把电子从{正极}搬运到{负极}", "c": "red", "size": 34}, {"t": "big", "at": "s2", "text": "保持{电势差} → {持续电流}", "size": 46}], "callout": {"label": "要点", "at": "s3", "text": "电源维持{电势差}"}, "beat": {"k": "a1", "at": "s2b", "text": "电源像搬运工\n不停{搬运电子|red}"}}} />;
