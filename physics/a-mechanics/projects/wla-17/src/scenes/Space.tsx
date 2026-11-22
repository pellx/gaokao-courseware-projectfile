import React from 'react';
import {AutoScene} from '../components/auto';

export const Space: React.FC = () => <AutoScene k="space" d={{"tag": "考点七", "title": "航天器中的失重现象", "blocks": [{"t": "chain", "steps": [{"at": "w1", "text": "地球引力"}, {"at": "w1", "text": "全部提供{向心力}"}, {"at": "w2", "text": "对座椅压力为 {0}"}, {"at": "w3", "text": "{完全失重}"}], "arrows": []}], "callout": {"label": "易错", "at": "w4", "text": "完全失重{仍受引力}"}}} />;
