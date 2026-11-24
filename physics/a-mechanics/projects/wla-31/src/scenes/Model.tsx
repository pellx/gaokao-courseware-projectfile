import React from 'react';
import {AutoScene} from '../components/auto';

export const Model: React.FC = () => <AutoScene k="model" d={{"tag": "考点一", "title": "单摆模型", "blocks": [{"t": "rule", "tag": "构成", "at": "m1", "text": "细线 + 小球，悬点固定", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "细线", "at": "m2", "lines": ["质量{可忽略}", "伸缩{可忽略}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "小球", "at": "m2", "lines": ["直径{远小于}线长"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "m3", "text": "单摆是理想化模型", "size": 32}], "callout": {"label": "易错", "at": "m4", "text": "粗绳、弹性绳、大球{不是}单摆"}, "beat": {"k": "swing", "at": "m3b", "text": "人看成小球，绳轻不伸长\n秋千 ≈ {单摆|red}"}}} />;
