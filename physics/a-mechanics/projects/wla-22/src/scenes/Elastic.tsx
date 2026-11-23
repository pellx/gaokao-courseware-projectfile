import React from 'react';
import {AutoScene} from '../components/auto';

export const Elastic: React.FC = () => <AutoScene k="elastic" d={{"tag": "考点六", "title": "弹性势能", "blocks": [{"t": "rule", "tag": "定义", "at": "f2", "text": "发生{弹性形变}的物体因弹力相互作用而具有的势能", "c": "red"}, {"t": "items", "items": [{"at": "f3", "text": "拉开的弓"}, {"at": "f3", "text": "压缩的弹簧"}, {"at": "f3", "text": "拉长的橡皮筋"}], "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "要有{弹性形变}"}, "beat": {"k": "cheek", "at": "f3b", "text": "有形变\n就有{弹性势能|red}"}}} />;
