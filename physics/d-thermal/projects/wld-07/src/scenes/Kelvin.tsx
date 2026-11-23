import React from 'react';
import {AutoScene} from '../components/auto';

export const Kelvin: React.FC = () => <AutoScene k="kelvin" d={{"tag": "考点三", "title": "开尔文表述", "blocks": [{"t": "big", "at": "k1", "text": "不可能从{单一热库}吸热全部变成功\n而不产生其他影响", "size": 40}, {"t": "chain", "steps": [{"at": "k2", "text": "高温热库：吸热 Q_1"}, {"at": "k2", "text": "对外做功 W", "c": "orange"}, {"at": "k2", "text": "低温热库：放热 Q_2"}], "arrows": []}, {"t": "text", "at": "k3", "text": "热机效率{不可能达到 100%|orange}", "size": 36}], "callout": {"label": "要点", "at": "k4", "text": "两种表述{等价}"}}} />;
