import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点五", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "测力计{调零}"}, {"at": "s2", "text": "测力计、细绳、橡皮条与木板{平行}"}, {"at": "s3", "text": "结点 O {不变}"}, {"at": "s4", "text": "细绳{长些}，夹角{适中}"}], "arrows": []}], "callout": {"label": "易错", "at": "s5", "text": "夹角{不必是 90°}，适中即可"}}} />;
