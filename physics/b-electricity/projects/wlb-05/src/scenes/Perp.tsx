import React from 'react';
import {AutoScene} from '../components/auto';

export const Perp: React.FC = () => <AutoScene k="perp" d={{"tag": "考点四", "title": "等势面与电场线", "blocks": [{"t": "items", "items": [{"at": "p1", "text": "等势面与电场线{垂直}"}, {"at": "p2", "text": "电场线：{高电势}指向{低电势|orange}"}, {"at": "p3", "text": "等差等势面{越密}，E 越大"}], "size": 34}], "callout": {"label": "要点", "at": "p4", "text": "垂直；高指低；{密处场强大}"}, "beat": {"k": "a2", "at": "p3b", "text": "等势面越密\n电场{越强|red}"}}} />;
