import React from 'react';
import {AutoScene} from '../components/auto';

export const Vs: React.FC = () => <AutoScene k="vs" d={{"tag": "考点九", "title": "振动图像与波的图像", "blocks": [{"t": "table", "at": "v1", "head": ["", "振动图像", "波的图像"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "v2", "cells": ["研究对象", "{一个质点}", "某时刻{各质点}"]}, {"at": "v2", "cells": ["横轴", "时间 t", "位置 x"]}, {"at": "v3", "cells": ["可读出", "{周期 T}", "{波长 λ}"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "易错", "at": "v4", "text": "先看{横轴}：t 还是 x"}, "beat": {"k": "stand", "at": "v3b", "text": "曲线一样\n先看{横轴|red}"}}} />;
