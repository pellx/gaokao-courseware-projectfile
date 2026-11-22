import React from 'react';
import {AutoScene} from '../components/auto';

export const Ek: React.FC = () => <AutoScene k="ek" d={{"tag": "考点四", "title": "动量与动能", "blocks": [{"t": "table", "at": "e1", "head": ["", "动量", "动能"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "e1", "cells": ["表达式", "p = mv", "E_k = mv^2/2"]}, {"at": "e1", "cells": ["性质", "{矢量}", "标量"]}], "size": 32, "rowHeight": 64}, {"t": "big", "at": "e2", "text": "E_k = {p^2/2m}", "size": 46}, {"t": "text", "at": "e3", "text": "匀速圆周运动：动量{变}，动能不变", "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "动量变，动能{不一定}变；动能变，动量{一定}变"}}} />;
