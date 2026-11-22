import React from 'react';
import {AutoScene} from '../components/auto';

export const Amino: React.FC = () => <AutoScene k="amino" d={{"tag": "考点四", "title": "氨基酸", "blocks": [{"t": "rule", "tag": "结构", "at": "am1", "text": "含{—NH2 和 —COOH}", "c": "red", "size": 33}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "两性", "at": "am2", "text": "与盐酸、NaOH {都反应}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "成肽", "at": "am3", "text": "脱水形成{肽键 —CONH—}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "am4", "text": "两种氨基酸成二肽：{4 种}"}, "beat": {"k": "bearears", "at": "am3b", "text": "{羧基牵氨基|red}\n连成长链"}}} />;
