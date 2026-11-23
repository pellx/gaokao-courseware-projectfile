import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点二", "title": "产生条件", "blocks": [{"t": "items", "items": [{"at": "b2", "text": "接触面{粗糙}"}, {"at": "b2", "text": "相互挤压，{有弹力}"}, {"at": "b3", "text": "有{相对运动}或{相对运动趋势}"}], "size": 36}, {"t": "text", "at": "b4", "text": "摩擦力与弹力的方向{相互垂直}", "size": 32}], "callout": {"label": "易错", "at": "b5", "text": "有弹力{不一定}有摩擦力"}}} />;
