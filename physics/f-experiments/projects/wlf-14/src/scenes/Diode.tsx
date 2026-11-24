import React from 'react';
import {AutoScene} from '../components/auto';

export const Diode: React.FC = () => <AutoScene k="diode" d={{"tag": "考点八", "title": "测二极管的正、反向电阻", "blocks": [{"t": "rule", "tag": "单向导电性", "at": "h1", "text": "正向容易导通，反向几乎不导通", "c": "red", "size": 34}, {"t": "table", "at": "h2", "head": ["接法", "测得", "阻值"], "cols": "2fr 1fr 1fr", "rows": [{"at": "h2", "cells": ["{黑表笔}接正极，红表笔接负极", "正向电阻", "{较小}"]}, {"at": "h3", "cells": ["{红表笔}接正极，黑表笔接负极", "反向电阻", "{很大}"]}], "size": 32, "rowHeight": 72}], "callout": {"label": "易错", "at": "h4", "text": "测正向电阻：{黑表笔接二极管正极}"}, "beat": {"k": "no", "at": "h3b", "text": "反接：把电流拦在门外\n反向电阻{很大|red}"}}} />;
