import React from 'react';
import {AutoScene} from '../components/auto';

export const Charge: React.FC = () => <AutoScene k="charge" d={{"tag": "考点三", "title": "充电时的连接与反应", "blocks": [{"t": "big", "at": "cg2", "text": "正极接{正极}，负极接{负极}", "size": 46}, {"t": "table", "at": "cg2", "head": ["电极", "放电时", "充电时"], "cols": "1fr 1.2fr 1.2fr", "rows": [{"at": "cg2", "cells": ["PbO2 极", "正极，还原", "{阳极}，氧化"]}, {"at": "cg2", "cells": ["Pb 极", "负极，氧化", "{阴极|orange}，还原"]}], "size": 33, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "cg4", "text": "充电反应 = 放电时{同一电极反应反过来}"}, "beat": {"k": "sign", "at": "cg2b", "text": "{正接正|red}\n{负接负|red}"}}} />;
