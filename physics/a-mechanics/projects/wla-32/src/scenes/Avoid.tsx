import React from 'react';
import {AutoScene} from '../components/auto';

export const Avoid: React.FC = () => <AutoScene k="avoid" d={{"tag": "考点八", "title": "共振的防止", "blocks": [{"t": "rule", "tag": "方法", "at": "a1", "text": "f驱 {远离} f固", "c": "red"}, {"t": "table", "at": "a2", "head": ["实例", "做法"], "cols": "1fr 2fr", "rows": [{"at": "a2", "cells": ["部队过桥", "{便步走}，步伐不整齐"]}, {"at": "a3", "cells": ["火车过桥", "{减速}行驶"]}, {"at": "a3", "cells": ["机器运转", "转速避开机座的{固有频率}"]}], "size": 32, "rowHeight": 76}], "callout": {"label": "要点", "at": "a4", "text": "防止共振：f驱 {远离} f固"}}} />;
