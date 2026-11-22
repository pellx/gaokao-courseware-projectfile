import React from 'react';
import {AutoScene} from '../components/auto';

export const Bleach: React.FC = () => <AutoScene k="bleach" d={{"tag": "考点五", "title": "SO2 的漂白性", "blocks": [{"t": "chain", "steps": [{"at": "bl1", "text": "品红溶液"}, {"at": "bl1", "text": "{褪色}", "c": "red"}, {"at": "bl1", "text": "{恢复红色}", "c": "orange"}], "arrows": ["通 SO2", "加热"], "center": true, "size": 40}, {"t": "mark", "ok": false, "at": "bl2", "text": "SO2 使紫色石蕊褪色（只变红，不褪色）", "size": 32}, {"t": "mark", "ok": true, "at": "bl3", "text": "SO2 + Cl2 + 2H2O = H2SO4 + 2HCl：等物质的量混合，{失去漂白性}", "size": 32}], "callout": {"label": "答题模板", "at": "bl4", "text": "通入品红：{褪色，加热后恢复红色} → 是 SO2"}, "beat": {"k": "pink", "at": "bl1b", "text": "品红褪色\n{一加热又红回来|red}"}}} />;
