import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxid: React.FC = () => <AutoScene k="oxid" d={{"tag": "考点四", "title": "醇的催化氧化规律", "blocks": [{"t": "table", "at": "ox1", "head": ["连羟基的碳上", "产物", "例"], "cols": "1.2fr 1fr 2fr", "rows": [{"at": "ox2", "cells": ["2 个 H", "{醛}", "CH3CH2OH → CH3CHO"]}, {"at": "ox3", "cells": ["1 个 H", "{酮|orange}", "(CH3)2CHOH → CH3COCH3"]}, {"at": "ox3", "cells": ["0 个 H", "{不能氧化}", "(CH3)3COH"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "易错", "at": "ox4", "text": "铜丝先黑后红，Cu 是{催化剂}"}}} />;
