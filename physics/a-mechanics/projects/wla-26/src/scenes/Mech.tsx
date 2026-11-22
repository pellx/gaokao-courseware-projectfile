import React from 'react';
import {AutoScene} from '../components/auto';

export const Mech: React.FC = () => <AutoScene k="mech" d={{"tag": "考点六", "title": "动量守恒与机械能守恒", "blocks": [{"t": "table", "at": "m1", "head": ["", "动量守恒", "机械能守恒"], "cols": "1fr 1.5fr 1.5fr", "rows": [{"at": "m1", "cells": ["条件", "{外力矢量和为 0}", "只有{重力或弹力}做功"]}, {"at": "m3", "cells": ["子弹射入木块", "守恒", "{不守恒}"]}], "size": 30, "rowHeight": 70}], "callout": {"label": "易错", "at": "m4", "text": "一个守恒，另一个{不一定}守恒"}}} />;
