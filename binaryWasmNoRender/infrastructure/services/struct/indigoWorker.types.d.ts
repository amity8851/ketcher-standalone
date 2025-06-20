/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { IKetMacromoleculesContent } from 'ketcher-core';
export declare type IndigoStandalone = any;
export declare const enum Command {
    Info = 0,
    Convert = 1,
    Layout = 2,
    Clean = 3,
    Aromatize = 4,
    Dearomatize = 5,
    CalculateCip = 6,
    Automap = 7,
    Check = 8,
    Calculate = 9,
    GenerateImageAsBase64 = 10,
    GetInChIKey = 11,
    ExplicitHydrogens = 12
}
export declare const enum WorkerEvent {
    Info = "info",
    Convert = "convert",
    Layout = "layout",
    Clean = "clean",
    Aromatize = "aromatize",
    Dearomatize = "dearomatize",
    CalculateCip = "calculateCip",
    Automap = "automap",
    Check = "check",
    Calculate = "calculate",
    GenerateImageAsBase64 = "generateImageAsBase64",
    GetInChIKey = "getInChIKey",
    ExplicitHydrogens = "convert_explicit_hydrogens"
}
export declare enum SupportedFormat {
    Rxn = "rxnfile",
    Mol = "molfile",
    Smiles = "smiles",
    Smarts = "smarts",
    CML = "cml",
    InChI = "inchi",
    InChIAuxInfo = "inchi-aux",
    InChIKey = "inchi-key",
    Ket = "ket",
    CDX = "cdx",
    CDXML = "cdxml",
    SDF = "sdf",
    FASTA = "fasta",
    SEQUENCE = "sequence",
    SEQUENCE_3_LETTER = "peptide-sequence-3-letter",
    IDT = "idt",
    HELM = "helm",
    RDF = "rdf"
}
export interface WithStruct {
    struct: string;
}
export interface WithFormat {
    format: SupportedFormat;
}
export interface WithSelection {
    selectedAtoms: Array<number>;
}
export interface CommandOptions {
    [key: string]: IKetMacromoleculesContent | string | number | boolean | undefined;
}
export interface CommandData {
    options?: CommandOptions;
}
export interface CheckCommandData extends CommandData, WithStruct {
    types: Array<string>;
}
export interface ConvertCommandData extends CommandData, WithStruct, WithFormat {
}
export interface GenerateInchIKeyCommandData extends CommandData, WithStruct {
}
export interface GenerateImageCommandData extends CommandData, WithStruct {
    outputFormat: 'png' | 'svg';
    backgroundColor?: string;
    bondThickness?: number;
}
export interface LayoutCommandData extends CommandData, WithStruct, WithFormat {
}
export interface CleanCommandData extends CommandData, WithStruct, WithSelection, WithFormat {
}
export interface AromatizeCommandData extends CommandData, WithStruct, WithFormat {
}
export interface DearomatizeCommandData extends CommandData, WithStruct, WithFormat {
}
export interface CalculateCipCommandData extends CommandData, WithStruct, WithFormat {
}
export declare type CalculateProps = 'molecular-weight' | 'most-abundant-mass' | 'monoisotopic-mass' | 'gross' | 'gross-formula' | 'mass-composition';
export interface CalculateCommandData extends CommandData, WithStruct, WithSelection {
    properties: Array<string>;
}
export interface AutomapCommandData extends CommandData, WithStruct, WithFormat {
    mode: string;
}
export interface ExplicitHydrogensCommandData extends CommandData, WithStruct, WithFormat {
    mode: 'auto' | 'fold' | 'unfold';
}
interface OutputMessageBase {
    type?: Command;
    hasError?: boolean;
}
interface OutputMessageWithError extends OutputMessageBase {
    hasError: true;
    error: string;
    inputData?: string;
}
interface OutputMessageWithoutError<T> extends OutputMessageBase {
    hasError?: false;
    payload: T;
    inputData?: string;
}
export declare type OutputMessage<T> = OutputMessageWithError | OutputMessageWithoutError<T>;
export interface InputMessage<T> {
    type: Command;
    data: T;
}
export interface OutputMessageWrapper<T = string> {
    data: OutputMessage<T>;
}
export {};
