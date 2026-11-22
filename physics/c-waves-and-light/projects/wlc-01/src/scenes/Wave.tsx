import React from 'react';
import {AutoScene} from '../components/auto';

export const Wave: React.FC = () => <AutoScene k="wave" d={{"tag": "考点二", "title": "机械波", "blocks": [{"t": "rule", "tag": "定义", "at": "m1", "text": "机械振动在{介质}中的传播", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "m2", "text": "{波源}", "size": 56}]}, {"blocks": [{"t": "big", "at": "m2", "text": "{介质|orange}", "size": 56, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "m3", "text": "水波、绳波、声波都是机械波；真空中声音{不能}传播", "size": 32}], "callout": {"label": "要点", "at": "m4", "text": "有振动不一定有波；{有波一定有振动}"}}} />;
