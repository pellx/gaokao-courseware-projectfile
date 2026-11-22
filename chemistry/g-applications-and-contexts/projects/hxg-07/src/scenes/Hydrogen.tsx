import React from 'react';
import {AutoScene} from '../components/auto';

export const Hydrogen: React.FC = () => <AutoScene k="hydrogen" d={{"tag": "考点二", "title": "电解水与光解水", "blocks": [{"t": "table", "at": "hy1", "head": ["环境", "阴极（H2）", "阳极（O2）"], "cols": "0.8fr 2fr 2fr", "rows": [{"at": "hy1", "cells": ["碱性", "2H2O + 2e^- = {H2↑} + 2OH^-", "4OH^- − 4e^- = {O2↑} + 2H2O"]}, {"at": "hy2", "cells": ["酸性", "2H^+ + 2e^- = H2↑", "2H2O − 4e^- = O2↑ + 4H^+"]}], "size": 27, "rowHeight": 72}, {"t": "text", "at": "hy3", "text": "光催化：{光能 → 化学能}；催化剂不改 ΔH", "size": 33, "center": true}], "callout": {"label": "易错", "at": "hy4", "text": "H2 在{阴极}，O2 在阳极"}}} />;
