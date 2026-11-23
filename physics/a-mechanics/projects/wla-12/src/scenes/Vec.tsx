import React from 'react';
import {AutoScene} from '../components/auto';

export const Vec: React.FC = () => <AutoScene k="vec" d={{"tag": "考点三", "title": "矢量性", "blocks": [{"t": "rule", "tag": "方向", "at": "c1", "text": "a 的方向{总与合力方向相同}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c2", "text": "F_x = {ma_x}", "size": 46}]}, {"blocks": [{"t": "big", "at": "c2", "text": "F_y = {ma_y|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "c3", "text": "速度方向与合力方向{不一定相同}", "size": 32}], "callout": {"label": "易错", "at": "c4", "text": "合力定的是{加速度}方向，不是速度方向"}}} />;
