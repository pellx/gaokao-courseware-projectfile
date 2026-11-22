import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点三", "title": "腐蚀快慢比较", "blocks": [{"t": "chain", "steps": [{"at": "sp1", "text": "{电解池阳极}"}, {"at": "sp1", "text": "原电池负极"}, {"at": "sp1", "text": "化学腐蚀"}, {"at": "sp1", "text": "原电池正极"}, {"at": "sp1", "text": "{电解池阴极|green}"}], "arrows": [">", ">", ">", ">"], "center": true, "size": 30}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "镀锌铁破损", "at": "sp3", "text": "Zn 作负极，{Fe 被保护|green}", "c": "green", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "镀锡铁破损", "at": "sp3", "text": "Fe 作负极，{腐蚀更快}", "c": "red", "size": 31}]}]}], "callout": {"label": "易错", "at": "sp4", "text": "镀锡铁破损后{比普通铁更易腐蚀}"}}} />;
