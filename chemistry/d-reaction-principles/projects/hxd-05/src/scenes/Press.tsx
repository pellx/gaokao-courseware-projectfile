import React from 'react';
import {AutoScene} from '../components/auto';

export const Press: React.FC = () => <AutoScene k="press" d={{"tag": "考点四", "title": "压强的影响", "blocks": [{"t": "big", "at": "pr1", "text": "增大压强 → 向{气体分子数减小}的方向移动", "size": 40}, {"t": "panel", "title": "2NO2（红棕）⇌ N2O4（无色）", "at": "pr2", "lines": ["压缩：颜色{先变深后变浅}", "最终比原来{深}：平衡只能减弱"], "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "pr4", "text": "H2 + I2 ⇌ 2HI：加压{平衡不移动}，颜色变深"}}} />;
