import React from 'react';
import {AutoScene} from '../components/auto';

export const Second: React.FC = () => <AutoScene k="second" d={{"tag": "考点一", "title": "牛顿第二定律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "a ∝ {F}", "size": 52}]}, {"blocks": [{"t": "big", "at": "a2", "text": "a ∝ {1/m|orange}", "size": 52, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "方向", "at": "a3", "text": "加速度方向与{作用力方向相同}", "c": "red"}], "callout": {"label": "要点", "at": "a4", "text": "同时给出 a 的{大小}和{方向}"}, "beat": {"k": "push", "at": "a3b", "text": "力越大加速越快\n质量越大{越难加速|red}"}}} />;
