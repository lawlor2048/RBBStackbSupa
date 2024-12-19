import React from 'react';

interface DebugInfoProps {
  debug: any;
}

export default function DebugInfo({ debug }: DebugInfoProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
      <h3 className="text-lg font-semibold mb-4 text-[#2f3676]">API Debug Information</h3>
      <div className="space-y-4">
        {debug.requestUrl && (
          <div>
            <p className="font-medium text-gray-700">Request URL:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto">
              {debug.requestUrl}
            </pre>
          </div>
        )}
        {debug.timestamp && (
          <div>
            <p className="font-medium text-gray-700">Timestamp:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm">
              {debug.timestamp}
            </pre>
          </div>
        )}
        {debug.status && (
          <div>
            <p className="font-medium text-gray-700">Status:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm">
              {debug.status} ({debug.statusText})
            </pre>
          </div>
        )}
        {debug.headers && (
          <div>
            <p className="font-medium text-gray-700">Response Headers:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto">
              {JSON.stringify(debug.headers, null, 2)}
            </pre>
          </div>
        )}
        {debug.body && (
          <div>
            <p className="font-medium text-gray-700">Response Body:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(debug.body, null, 2)}
            </pre>
          </div>
        )}
        {debug.error && (
          <div>
            <p className="font-medium text-gray-700">Error Details:</p>
            <pre className="mt-1 p-2 bg-gray-50 rounded text-sm overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(debug.error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}