import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点四", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "细绳与木板{平行}"}, {"at": "s2", "text": "小车{靠近}计时器"}, {"at": "s3", "text": "先{通电}，后{放车}"}, {"at": "s4", "text": "及时{断电}，选清晰纸带"}], "arrows": []}], "callout": {"label": "易错", "at": "s5", "text": "{先接通电源，后释放小车}"}}} />;
