import React from 'react';
import {AutoScene} from '../components/auto';

export const Reduce: React.FC = () => <AutoScene k="reduce" d={{"tag": "考点三", "title": "SO2 的还原性", "blocks": [{"t": "rule", "tag": "褪色", "at": "re1", "text": "使{酸性 KMnO4}、溴水褪色（被氧化成 SO4^2-）", "c": "red", "size": 31}, {"t": "big", "at": "re2", "text": "SO2 + Br2 + 2H2O = H2SO4 + 2HBr", "size": 38}, {"t": "big", "at": "re2", "text": "2SO2 + O2 ⇌（催化剂、△）2SO3", "size": 38, "c": "orange", "soft": "orangeSoft"}, {"t": "rule", "tag": "对比", "at": "re3", "text": "SO2 通入 BaCl2：无沉淀；通入 {Ba(NO3)2}：有 BaSO4 白色沉淀", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "re4", "text": "使酸性 KMnO4、溴水褪色：{还原性}，不是漂白性"}}} />;
