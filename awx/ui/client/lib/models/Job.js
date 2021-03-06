let Base;
let $http;

function getRelaunch (params) {
    const req = {
        method: 'GET',
        url: `${this.path}${params.id}/relaunch/`
    };

    return $http(req);
}

function postRelaunch (params) {
    const req = {
        method: 'POST',
        url: `${this.path}${params.id}/relaunch/`
    };

    if (params.relaunchData) {
        req.data = params.relaunchData;
    }

    return $http(req);
}

function JobModel (method, resource, config) {
    Base.call(this, 'jobs');

    this.Constructor = JobModel;
    this.postRelaunch = postRelaunch.bind(this);
    this.getRelaunch = getRelaunch.bind(this);

    return this.create(method, resource, config);
}

function JobModelLoader (BaseModel, _$http_) {
    Base = BaseModel;
    $http = _$http_;

    return JobModel;
}

JobModelLoader.$inject = [
    'BaseModel',
    '$http'
];

export default JobModelLoader;
