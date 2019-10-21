declare function removeDotSegments(path: string): string;
declare function removeDotSegmentsOfPath(iri: string, colonPosition: number): string;
declare function resolve(relativeIRI: string, baseIRI: string): boolean;


export {
  removeDotSegments,
  removeDotSegmentsOfPath
}

export default resolve;
