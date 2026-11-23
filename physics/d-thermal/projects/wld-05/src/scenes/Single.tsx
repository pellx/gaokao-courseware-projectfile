import React from 'react';
import {AutoScene} from '../components/auto';

export const Single: React.FC = () => <AutoScene k="single" d={{"tag": "考点二", "title": "单晶体和多晶体", "blocks": [{"t": "table", "at": "s1", "head": ["比较项目", "单晶体", "多晶体", "非晶体"], "cols": "1fr 1.2fr 1.2fr 1.2fr", "rows": [{"at": "s1", "cells": ["几何形状", "{规则}", "不规则", "不规则"]}, {"at": "s3", "cells": ["熔点", "确定", "确定", "{不确定|orange}"]}, {"at": "s3", "cells": ["物理性质", "{各向异性}", "各向同性", "各向同性"]}], "size": 30, "rowHeight": 60}, {"t": "text", "at": "s2", "text": "云母片上的蜡熔化成{椭圆形|orange}：导热各向异性", "size": 30}], "callout": {"label": "要点", "at": "s4", "text": "只有{单晶体}可能各向异性"}}} />;
